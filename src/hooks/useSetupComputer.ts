import { useEffect } from "react";
import { Group } from "three";

const useSetupComputer = (computerRef: React.RefObject<Group | null>) => {
  useEffect(() => {
    if (!computerRef?.current) return;

    computerRef.current.position.setZ(5);

    const mouse = computerRef.current.getObjectByName("Object_13");
    const keyboard = computerRef.current.getObjectByName("Object_15");

    if (mouse) {
      mouse.position.set(-1, 4.5, -1);
      mouse.scale.setScalar(0.55);
      mouse.rotation.x = 0.3;
    }

    if (keyboard) {
      keyboard.position.set(0, 3, -1);
      keyboard.scale.setScalar(0.55);
      keyboard.rotation.z = -0.3;
      keyboard.rotation.x = 0.2;
    }
  }, []);
};

export default useSetupComputer;
