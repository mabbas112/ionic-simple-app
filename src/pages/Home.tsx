
import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  useIonLoading
} from '@ionic/react';
import './Home.css';
import Users from '../services/http/Users';
import { User } from '../type/UserType';
import UserItem from '../components/User';

const Home: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [present, dismiss] = useIonLoading();

  const getUsers = async () => {
    present({
      message: 'Wait! we are fetching results for you.',
      spinner: 'lines-sharp'
    });
    try {
      const response = await Users.getUsers('token', { results: 100 });
      setUsers(response?.results)
      dismiss();
    } catch (err) {
      console.log("Error while fetching users", err)
      dismiss();
    }
  }

  useIonViewWillEnter(() => {
    getUsers();
  }, []);

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const deleteHandler = (user: User) => {
    setUsers((preState: User[]) => {
      return (
        preState?.filter((item: User) => {
          const { id: { name, value } } = item;
          return name !== user?.id?.name && value !== user?.id?.value
        })
      );
    })
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle color="secondary">Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {
            users?.map((u: User) => <UserItem
              key={u.email}
              user={u}
              deleteHandler={() => deleteHandler(u)}
            />)
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
