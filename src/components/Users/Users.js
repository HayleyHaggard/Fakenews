import userImage from '../../assets/images/user.png';
import './Users.scss'

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = ((curP - 4) < 0) ? 0 : curP - 4;
  let curPL = curP + 4;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div className='users'>
      <div>
        {slicedPages.map(p => {
          return <span className={props.currentPage === p ? 'users__page active' : 'users__page'}
            onClick={() => { props.onPageChanged(p); }}>{p}</span>
        }
        )}
      </div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img className='users__image' src={u.photos.small != null ? u.photos.small : userImage} alt='profile' />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>
                {'u.location.city'}
              </div>
              <div>
                {'u.location.country'}
              </div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;