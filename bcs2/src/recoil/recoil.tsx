import { atom,  selector } from 'recoil';

export const userNameAtom = atom({
    key: 'userNameAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

 export const userNameInLS: any = selector({
    key: 'userNameInLS', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const nameText: any = get(userNameAtom);     
    // walkaround for solid userName display after window reload
      const item: any = localStorage.getItem('userName'); 

      return item;
    },
  });
