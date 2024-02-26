import { NotificationType } from '../const/notification-type';

export interface Notification {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  type: NotificationType;
  href?: string;
}
