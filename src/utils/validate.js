export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = "Введите email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ) {
        errors.email = "Неверный email";
      }
    },

    password: value => {
      if(!value) {
        errors.password = "Введите пароль";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Слишком лёгкий пароль';
      }
    }
  };

  Object.keys(rules).forEach(
    key => rules[key] && rules[key](values[key])
  )
}
