import EditInfo from './EditInfo'

export default function MyInfo({ profile = {} }) {
  return (
    <>
      <dl className="profile-account-details">
        <div>
          <dt>کد ملی</dt>
          <dd><bdi>{profile.nationalId || '—'}</bdi></dd>
        </div>
        <div>
          <dt>نام کاربری</dt>
          <dd><bdi>{profile.username || '—'}</bdi></dd>
        </div>
      </dl>

      <section className="profile-account-edit" aria-labelledby="profile-account-edit-title">
        <h3 id="profile-account-edit-title">ویرایش</h3>
        <EditInfo initialValues={profile} />
      </section>
    </>
  )
}
