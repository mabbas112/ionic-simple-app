import {
  IonItem,
  IonLabel,
  IonText,
  IonAvatar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonBadge
} from '@ionic/react';
import './User.css';
import { User } from '../type/UserType';

interface UserItemProps {
  user: User;
  deleteHandler: () => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, deleteHandler }) => {

  const { name: { title, first, last }, picture, gender } = user;

  return (
    <IonItemSliding >
      <IonItem>
        <IonLabel>
          <IonAvatar>
            <img alt={`${first} ${last}`} src={picture?.medium} />
          </IonAvatar>
        </IonLabel>
        <IonLabel>
          <IonText color="secondary">
            <h2>{`${title} ${first} ${last}`}</h2>
          </IonText>
        </IonLabel>
        <IonLabel>
          <IonBadge>{gender === 'female' ? 'F' : 'M'}</IonBadge>
        </IonLabel>
        <IonLabel>
          <IonBadge>{`Age: ${user?.registered?.age}`}</IonBadge>
        </IonLabel>
      </IonItem>

      <IonItemOptions>
        <IonItemOption color="danger" onClick={deleteHandler}>Delete</IonItemOption>
      </IonItemOptions>

    </IonItemSliding>
  );
};

export default UserItem;
