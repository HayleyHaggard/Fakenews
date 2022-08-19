import { NavLink } from 'react-router-dom';
import userImage from '../../assets/images/user.png';
import './Users.scss'
import axios from 'axios';


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
              <NavLink to={'/profile/' + u.id}>
                <img className='users__image' src={u.photos.small != null ? u.photos.small : userImage} alt='profile' />
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "10f79686-7638-4861-a038-fcca91fc433f"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                }}>Unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "10f79686-7638-4861-a038-fcca91fc433f"
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                }}>Follow</button>}
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
        </div >)
      }
    </div >
  );
}

export default Users;