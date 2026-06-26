const Notification = ({message}) => {
    if (message.text === null){
        return null
    }

    if (message.type === 'notification'){
        return (
            <div className="notification">
                {message.text}
            </div>
        )
    } else if (message.type === 'error'){
        return (
            <div className='error'>
                {message.text}
            </div>
        )
    }
}

export default Notification