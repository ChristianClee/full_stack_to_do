import {useEffect} from 'react'

export function useObsurveValue(
  setValue: React.Dispatch<React.SetStateAction<string>>,
  valueTextRef: React.MutableRefObject<string>,
  text: string
) {
  useEffect(() => {
    setValue(text);
    valueTextRef.current = text;
  }, [text]);
}

