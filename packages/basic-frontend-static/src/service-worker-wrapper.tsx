import {
  ButtonRegular,
  ButtonSize,
  ButtonType,
  Comment,
  ThemeDarkgray,
  TitleAbstract,
} from 'basic-frontend-common';
import React, { FC, ReactNode, useEffect } from 'react';
import { TEXTS } from './localization';
import * as serviceWorker from './serviceWorker';

type ServiceWorkerWrapperProps = {
  children: ReactNode;
};

// // https://felixgerschau.com/create-a-pwa-update-notification-with-create-react-app/
export const ServiceWorkerWrapper: FC<ServiceWorkerWrapperProps> = ({
  children,
}) => {
  const [showReload, setShowReload] = React.useState(false);
  const [
    waitingWorker,
    setWaitingWorker,
  ] = React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  const theme = ThemeDarkgray;

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    if (typeof window !== 'undefined') {
      window.location.reload(true);
    }
  };

  return (
    <>
      {showReload && (
        <div className="z-0 bg-teal-100 bg-opacity-25 rounded-lg m-4 p-4 text-center text-gray-800">
          <TitleAbstract theme={theme} marginBottom>
            {TEXTS.siteParts.updateBanner.title}
          </TitleAbstract>
          <Comment theme={theme} marginBottom>
            {TEXTS.siteParts.updateBanner.comment}
          </Comment>
          <ButtonRegular
            size={ButtonSize.normal}
            type={ButtonType.tertiary}
            onClick={reloadPage}
            text={TEXTS.siteParts.updateBanner.buttonText}
          />
        </div>
      )}
      {children}
    </>
  );
};

export default ServiceWorkerWrapper;
