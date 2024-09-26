import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.head}>Welcome to PhoneBook!</h1>
      <p className={s.info}>
        Here you can save all of your contacts with maximum comfort and safety
        ☎️ 📖
      </p>
      <p className={s.quote}>
        As the greatest Alexander Bell once said: &quot;Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quaerat, quo voluptatum modi eveniet
        nostrum ut atque? Nemo enim non quo voluptate. Adipisci voluptas, nam
        aspernatur reiciendis mollitia provident delectus ipsum&quot;.
      </p>
    </div>
  );
};

export default HomePage;
