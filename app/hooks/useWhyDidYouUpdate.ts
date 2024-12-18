import { useEffect, useRef } from "react";

export function useWhyDidYouUpdate(name: string, props: Record<string, any>) {
  // create a reference to track the previous data
  const previousProps = useRef<Record<string, any>>({});

  useEffect(() => {
    if (previousProps.current) {
      // merge the keys of previous and current data
      const keys = Object.keys({ ...previousProps.current, ...props });

      // to store what has change
      const changesObj: Record<string, any> = {};

      // check what values have changed between the previous and current
      keys.forEach((key) => {
        // if both are object
        if (
          typeof props[key] === "object" &&
          typeof previousProps.current[key] === "object"
        ) {
          if (
            JSON.stringify(previousProps.current[key]) !==
            JSON.stringify(props[key])
          ) {
            // add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key],
            };
          }
        } else {
          // if both are non-object
          if (previousProps.current[key] !== props[key]) {
            // add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key],
            };
          }
        }
      });

      // if changesObj not empty, print the cause
      if (Object.keys(changesObj).length) {
        console.log("This is causing re-renders", name, changesObj);
      }
    }

    // update the previous props with the current
    previousProps.current = props;
  });
}
