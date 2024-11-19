let inliezantion = {
    userData: JSON.parse(localStorage.getItem('redux')) || []
}

const curdReduser = (state = inliezantion, action) => {
    switch (action.type) {
        case 'add':
            // return alert('Har Har mahadev.....')
            let newDeta = [...state.userData, action.payload]
            localStorage.setItem('redux', JSON.stringify(newDeta))
            alert('you deta succesfully add')
            return {
                ...state,
                userData: newDeta
            }

        case 'delet':
            //return alert('har har mahadev')
            let dData = state.userData.filter((val) => val.id != action.payload)
            console.log(dData);
            localStorage.setItem('redux',JSON.stringify(dData))
            return{
                ...state,
                userData:dData,
            }
            

        default:
            return state

    }
}

export default curdReduser