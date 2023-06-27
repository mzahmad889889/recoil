import { atom, selector } from "recoil";

export const charLength = atom({
     key: 'Characterlength',
     default: ''
});

export const charCounter  = selector({
      key: 'CharacterCounter',
      get: ({get})=> {
           const GetText = get(charLength);
           return GetText.length;
      }      
});