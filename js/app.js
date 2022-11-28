const cardShare = document.querySelector('.card-share')

const arrow = document.querySelector('.arrow')

const messageBox = document.querySelector('.message-box')


    let arr = ['0', '1']

    cardShare.addEventListener('click', (e) => {
        switch (messageBox.style.opacity) {
            case arr[0]:
                messageBox.style.opacity = arr[1]
                break
            case arr[1]:
                messageBox.style.opacity = arr[0]
                break
            default:
                messageBox.style.opacity = arr[0]
        }
    });
