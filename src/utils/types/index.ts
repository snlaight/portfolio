export type AlertType = 'success' | 'error' | 'info' | 'warning';

export type AlertProps = {
  type: AlertType;
  message: string;
}

export type AlertListProps ={
  alerts: AlertProps[];
}

export type TAlertContext = {
  alerts: AlertProps[];
  handleAlert: (_: AlertProps) => void;
}
