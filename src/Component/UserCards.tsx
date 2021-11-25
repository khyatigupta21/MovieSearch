const UserCards = (data: any) => {
    const { image, link, label } = data;
    return (

        <div style={{ marginLeft: '10px',backgroundColor:'grey',width:'300px',borderRadius:'10px' }}>
            <div style={{ textAlign:'center', marginTop:'20px'}}>
                <img style={{ width: '200px'}} src={image} alt={label} />
            </div>
            <div >
                <span style={{ position: 'relative', bottom:'-10px',left:'5px' }}>{label}</span>
            </div>
        </div>

    )
}

export default UserCards;