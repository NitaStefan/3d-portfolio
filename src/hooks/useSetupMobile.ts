import { useEffect } from "react";
import { Group } from "three";

const useSetupMobile = (mobileRef: React.RefObject<Group | null>) => {
  useEffect(() => {
    if (!mobileRef?.current) return;

    mobileRef.current.scale.setScalar(140);
    mobileRef.current.rotation.y = 0;
    mobileRef.current.rotation.x = 3.14;
  }, []);
};

export default useSetupMobile;
