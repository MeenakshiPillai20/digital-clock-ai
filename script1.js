let arr = [
    {
        value: '12 AM - 1 AM',
        displayName: '12 AM - 1 AM'
    },
    {
        value: '1 AM - 2 AM',
        displayName: '1 AM - 2 AM'
    },
    {
        value: '2 AM - 3 AM',
        displayName: '2 AM - 3 AM'
    },
    {
        value: '3 AM - 4 AM',
        displayName: '3 AM - 4 AM'
    },
    {
        value: '4 AM - 5 AM',
        displayName: '4 AM - 5 AM'
    },
    {
        value: '5 AM - 6 AM',
        displayName: '5 AM - 6 AM'
    },
    {
        value: '6 AM - 7 AM',
        displayName: '6 AM - 7 AM'
    },
    {
        value: '7 AM - 8 AM',
        displayName: '7 AM - 8 AM'
    },
    {
        value: '8 AM - 9 AM',
        displayName: '8 AM - 9 AM'
    },
    {
        value: '9 AM - 10 AM',
        displayName: '9 AM - 10 AM'
    },
    {
        value: '10 AM - 11 AM',
        displayName: '10 AM - 11 AM'
    },
    {
        value: '11 AM - 12 PM',
        displayName: '11 AM - 12 PM'
    },{
        value: '12 PM - 1 AM',
        displayName: '12 PM - 1 AM'
    },
    {
        value: '1 PM - 2 AM',
        displayName: '1 PM - 2 AM'
    },
    {
        value: '2 PM - 3 AM',
        displayName: '2 PM - 3 AM'
    },
    {
        value: '3 PM - 4 AM',
        displayName: '3 PM - 4 AM'
    },
    {
        value: '4 PM - 5 AM',
        displayName: '4 PM - 5 AM'
    },
    {
        value: '5 PM - 6 AM',
        displayName: '5 PM - 6 AM'
    },
    {
        value: '6 PM - 7 AM',
        displayName: '6 PM - 7 AM'
    },
    {
        value: '7 PM - 8 AM',
        displayName: '7 PM - 8 AM'
    },
    {
        value: '8 PM - 9 AM',
        displayName: '8 PM - 9 AM'
    },
    {
        value: '9 PM - 10 AM',
        displayName: '9 PM - 10 AM'
    },
    {
        value: '10 PM - 11 AM',
        displayName: '10 PM - 11 AM'
    },
    {
        value: '11 PM - 12 AM',
        displayName: '11 PM - 12 AM'
    }

]
function wake() {
    const root = document.getElementById('wake-time')
    
    root.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option')
        option.innerText = arr[i].displayName
        option.value = arr[i].value
        root.append(option)
    }
}
wake()
function lunch() {
    const root = document.getElementById('lunch-time')
    
    root.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option')
        option.innerText = arr[i].displayName
        option.value = arr[i].value
        root.append(option)
    }
}
lunch()
function nap() {
    const root = document.getElementById('nap-time')
    
    root.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option')
        option.innerText = arr[i].displayName
        option.value = arr[i].value
        root.append(option)
    }
}
nap()
function night() {
    const root = document.getElementById('night-time')
    
    root.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option')
        option.innerText = arr[i].displayName
        option.value = arr[i].value
        root.append(option)
    }
}
night()