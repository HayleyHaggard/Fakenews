import './Users.scss'

let Users = (props) => {


  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: false, photoUrl: 'https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg', fullName: 'Sasha', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
      { id: 2, followed: true, photoUrl: 'https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg', fullName: 'Sasha', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, followed: true, photoUrl: 'https://img2.akspic.ru/previews/5/8/2/8/6/168285/168285-astronavt-risovanie-kosmos-kosmicheskoe_prostranstvo-multfilm-500x.jpg', fullName: 'Sasha', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
    ]
    );
  }

  return (
    <div className='users'>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img className='users__image' src={u.photoUrl} alt='profile' />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>
                {u.location.city}
              </div>
              <div>
                {u.location.country}
              </div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;