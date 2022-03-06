import s from '../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.content__image} src="https://readd.org/wp-content/uploads/2020/06/photo-1540051834522-7248234b9b4d.jpg.webp" alt=""/>
            <div>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo