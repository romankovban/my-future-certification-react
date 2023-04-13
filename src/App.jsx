import { useEffect } from 'react';
import fromAsync from '//unpkg.com/array-from-async';
import avatar from './assets/alison.jpg';
import ListIcon from './assets/3.png';

export const App = () => {
  useEffect(() => {
    const asyncFoo = async () => {
      async function* asyncGen(n) {
        for (let i = 1; i <= n; i++) yield i * 1;
      }

      const arr = await fromAsync(asyncGen(4));
      alert(
        'Я використав proposal-array-from-async. Ось результат виконання функції ' +
          JSON.stringify(arr, null, 2)
      );
      console.log(arr);
    };
    asyncFoo();
  }, []);

  return (
    <main className="container max-w-screen-lg my-6 mx-auto px-4 h-hull bg-mainWhite shadow-lg rounded shadow-blue-500/50">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-around items-center py-6">
          <h1 className="text-4xl font-bold">Ковбан Роман</h1>
          <div>
            <img src={avatar} alt="avatar" className="w-72 h-72 rounded-full" />
          </div>
        </div>

        <hr className="h-px bg-gray-200 border-2 dark:bg-gray-700" />

        <div className="flex flex-col p-6">
          <h1 className="text-3xl font-medium italic">Напрямок</h1>
          <p className="py-2 text-2xl font-normal">Front-end developer</p>
        </div>

        <hr className="h-px bg-gray-200 border-2 dark:bg-gray-700" />

        <div className="flex flex-col self-end p-6">
          <h1 className="text-3xl font-medium italic text-right">
            Персональна сертифікація
          </h1>
          <p className="py-2 text-2xl font-normal text-right">
            <a
              href="https://www.ciwcertified.com/ciw-certifications"
              target="_blank"
            >
              CIW (Certified Internet Web Professional)
            </a>
          </p>
        </div>

        <hr className="h-px bg-gray-200 border-2 dark:bg-gray-700" />

        <div className="flex flex-col p-6">
          <h1 className="text-3xl font-medium italic pb-3">
            Аргументація вибраної сертифікації
          </h1>
          <ul className="font-normal text-lg flex flex-col gap-3">
            <li className="pl-2 flex gap-2">
              <img
                src={ListIcon}
                alt="image icon"
                className="w-[50px] h-[58px]"
              />
              Специфікація CIW забезпечує стандартизацію навичок фронт-енд
              розробника, що дозволяє роботодавцям легко оцінювати індивідуальні
              здібності і знання розробника.
            </li>
            <li className="pl-2 flex gap-2">
              <img
                src={ListIcon}
                alt="image icon"
                className="w-[50px] h-[58px]"
              />
              Специфікація CIW містить перевірку знань у сфері веб-розробки, що
              забезпечує фронт-енд розробникам можливість отримати сертифікат,
              який підтверджує їхні професійні знання.
            </li>
            <li className="pl-2 flex gap-2">
              <img
                src={ListIcon}
                alt="image icon"
                className="w-[50px] h-[58px]"
              />
              Сертифікація CIW допомагає фронт-енд розробникам отримати
              відповідну визнаність на ринку праці та знайти більш
              високооплачувану роботу.
            </li>
            <li className="pl-2 flex gap-2">
              <img
                src={ListIcon}
                alt="image icon"
                className="w-[50px] h-[58px]"
              />
              Специфікація CIW дозволяє фронт-енд розробникам поглибити свої
              знання та навички в області веб-розробки, що дозволяє їм
              розвиватися та бути більш ефективними в своїй роботі.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
