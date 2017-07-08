var defaultStore = {
  name: 'Nathan'
}

export default function manageStore(store = defaultStore, action){
  switch(action.payload){
    case 'Savannah':
      console.log('Redux is working')
      break;
    default:
      return store
  }
}
