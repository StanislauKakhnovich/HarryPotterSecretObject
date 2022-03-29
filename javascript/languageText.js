
let levels = [
    {
        name: `level 0`,
        instructions: { 
            'ru': `
                    <p>Приветствую вас в игре <span translate="no">HARRY POTTER AND THE SECRET OBJECT</span>, которая поможет вам понять объекты. В <span translate="no">JavaScript</span>
                        объекты используются очень часто, это одна из основ языка. Поэтому вы должны понять их, 
                        прежде чем углубляться куда-либо ещё.  
                    </p>
                    <p>
                        Предлагаем вам пройти простую регистрацию на нашем сайте. Регистрация нужна для того, чтобы на сервере был сохранен ваш уровень в игре. 
                        Это позволит вам в любой момент выйти из игры и вернуться на достигнутый вами уровень.
                    </p>
                    <p>
                        Вы также можете продолжить играть без регистрации.
                    </p>
                    `,
            'en': `
                    <p>Welcome to the game <span translate="no">HARRY POTTER AND THE SECRET OBJECT</span>, which will help you understand objects. In <span translate="no">JavaScript</span>
                        objects are used very often, this is one of the foundations of the language. Therefore, you must understand them
                        before going anywhere else.
                    </p>
                    <p>
                        We invite you to complete a simple registration on our website. Registration is required in order for your level in the game to be saved on the server.
                        This will allow you to exit the game at any time and return to the level you have reached.
                    </p>
                    <p>
                        You can also continue playing without registering.
                    </p>
                    `,
            before: ``,
            after: ``
        },
        
    },
    {
        name: `level 1`,
        instructions: { 
            'ru': `
                    <p>Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. 
                        Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), 
                        а значение может быть чем угодно.
                    </p>
                    <p>Пустой объект можно создать, используя один из двух вариантов синтаксиса:
                        <br>
                        <code class="help">var user = new Object();</code>
                        <br>
                        <code class="help">var user = {};</code>
                    </p>
                    <p>Обычно используют вариант с фигурными скобками {...}. 
                        Такое объявление называют литералом объекта или литеральной нотацией.
                    </p>
                    <p>Гарри Поттер вырос и стал работать в Министерстве магии. Ему поручили создать подземное
                        секретное хранилище в котором будут храниться свитки с запрещенными заклинаниями. Помогите Гарри Поттеру создать 
                        хранилище свитков, которое будет нашим объектом. Объявите переменную <code class="help play">secretObject</code> и присвойте ей ссылку на пустой объект,
                        как показано в одном из примеров выше. Здесь и далее надо использовать <code class="help play">var</code> при объявлении переменных. 
                    </p>
                    <p>
                    Также, если после ввода правильного кода ничего не происходит, возможно возник баг, просто переключитесь прокрутчиком уровня, который находится над текстом.
                    </p>
                    <p>
                        После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>An object can be created using curly braces {…} with an optional list of properties.
                        A property is a key:value pair, where the key is a string (also called a "property name"),
                        and the value can be anything.
                    </p>
                    <p>An empty object can be created using one of two syntaxes:
                        <br>
                        <code class="help">var user = new Object();</code>
                        <br>
                        <code class="help">var user = {};</code>
                    </p>
                    <p>The curly braces {...} are usually used.
                        Such a declaration is called an object literal or literal notation.
                    </p>
                    <p>Harry Potter grew up to work for the Ministry of Magic. He was assigned to create an underground
                        a secret vault in which scrolls with forbidden spells will be stored. Help Harry Potter create
                        the scroll vault, which will be our object. Declare a <code class="help play">secretObject</code> variable and assign it a reference to an empty object,
                        as shown in one of the examples above. Here and below, <code class="help play">var</code> should be used when declaring variables.
                    </p>
                    <p>
                    Also, if nothing happens after entering the correct code, there may have been a bug, just switch the level scroller that is above the text.
                    </p>
                    <p>
                        After writing the code, press Enter.
                    </p>
            `
        },
        before: ``,
        after: ``
    },
    {
        name: `level 2`,
        instructions: {
            'ru': `
                    <p>При использовании литерального синтаксиса {...} мы сразу можем поместить в объект несколько свойств в виде пар «ключ: значение»:
                    </p>
                    <p>
                    <code class="help">
                    var user = {     // объект
                    <br>
                                name: "John",  // под ключом "name" хранится значение "John"
                    <br>
                                age: 30        // под ключом "age" хранится значение 30
                    <br>
                                };
                    </code>
                    </p>
                    <p> У каждого свойства есть ключ (также называемый «имя» или «идентификатор»). После имени свойства следует двоеточие <code class="help">":"</code>, и затем указывается значение свойства. Если в объекте несколько свойств, то они перечисляются через запятую. В объекте user сейчас находятся два свойства: 
                    </p>
                    <p>
                        Первое свойство с именем "name" и значением "John".
                    <br>
                        Второе свойство с именем "age" и значением 30.
                    </p>
                    <p>
                        Можно сказать, что наш объект user – это ящик с двумя папками, подписанными «name» и «age».
                    </p>
                    <p>
                    В случае с Гарри Поттером нашим объектом будет являться подземное хранилище. Свойствами данного объекта будут являться свитки
                    с заклинаниями. Наименованиями ключей будут названия заклинаний. Значениями свойств - тексты заклинаний.
                    </p>
                    <p>
                    Из Министерства магии Гарри Поттеру прислали первых два свитка с запрещенными заклинаниями. 
                    <p>
                    Первый свиток называется: <code class="help play">lectus</code> и содержит текст: <code class="help play">'Tortor, urna hac libero, sed o'</code>. 
                    <br>
                    Второй свиток называется: <code class="help play">amet</code> и содержит текст: <code class="help play">'Ipsum sed vitae consectetur du'</code>.
                    <p>
                    Помогите Гарри Поттеру переписать эти два свитка в новые свитки в подземном хранилище (наименование свитков будет являться именем свойств, текст - значением имен). 
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>When using the literal syntax {...}, we can immediately put several properties in the object in the form of key: value pairs:
                    </p>
                    <p>
                    <code class="help">
                    var user = { // object
                    <br>
                                name: "John", // the value "John" is stored under the key "name"
                    <br>
                                age: 30 // the value 30 is stored under the key "age"
                    <br>
                                };
                    </code>
                    </p>
                    <p> Each property has a key (also called a "name" or "identifier"). The property name is followed by a colon <code class="help">":"</code>, followed by the value of the property. If the object has several properties, they are listed separated by commas. The user object now has two properties:
                    </p>
                    <p>
                        First property with name "name" and value "John".
                    <br>
                        The second property is named "age" and has a value of 30.
                    </p>
                    <p>
                        We can say that our user object is a box with two folders labeled "name" and "age".
                    </p>
                    <p>
                    In the case of Harry Potter, our object will be an underground storage. The properties of this object will be scrolls
                    with spells. The names of the keys will be the names of the spells. Property values ​​are spell texts.
                    </p>
                    <p>
                    From the Ministry of Magic, Harry Potter was sent the first two scrolls with forbidden spells.
                    <p>
                    The first scroll is called: <code class="help play">lectus</code> and contains the text: <code class="help play">'Tortor, urna hac libero, sed o'</code>.
                    <br>
                    The second scroll is called: <code class="help play">amet</code> and contains the text: <code class="help play">'Ipsum sed vitae consectetur du'</code>.
                    <p>
                    Help Harry Potter rewrite these two scrolls into new scrolls in the underground storage (the name of the scrolls will be the name of the properties, the text will be the meaning of the names).
                    <p>
                    After writing the code, press Enter.
                    </p>
            `
            },
        before: 
`secretObject = {`,
        after: `}`
    },
    {
    name: `level 3`,
        instructions: { 
            'ru': `
                    <p>
                    Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
                    </p>
                    <p>
                    <code class="help"> var user = {
                    <br>
                        name: "John",
                    <br>
                        age: 30,
                    <br>
                        "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
                    <br>
                    };
                    </code>
                    </p>
                    <p>
                    Гарри Поттеру прислали свиток с названием состоящим из трех слов: <code class="help play">"cursus lacinia sed"</code>. Вот содержание этого свитка: <code class="help play">'Leo, dui habitasse velit in am'</code>.
                    Помогите ему переписать этот свиток в хранилище. 
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    The property name can be more than one word, but then it must be enclosed in quotation marks:
                    </p>
                    <p>
                    <code class="help"> var user = {
                    <br>
                        name: "John",
                    <br>
                        age: 30
                    <br>
                        "likes birds": true // multi-word property name must be in quotes
                    <br>
                    };
                    </code>
                    </p>
                    <p>
                    Harry Potter was sent a scroll with a three-word title: <code class="help play">"cursus lacinia sed"</code>. Here is the contents of this scroll: <code class="help play">'Leo, dui habitasse velit in am'</code>.
                    Help him rewrite this scroll in the vault.
                    <p>
                    After writing the code, press Enter.
                    </p>
                        `
        },
        before: 
`secretObject = {
    lectus: 'Tortor, urna hac libero, sed o',
    amet: 'Ipsum sed vitae consectetur du',`,
        after: `}`
    },
    {
        name: `level 4`,
            instructions: { 
            'ru': `
                    <p>
                    Мы можем в любой момент добавить в наше хранилище (объект) новые свитки, удалить свитки или прочитать содержимое любого свитка.
                    Для обращения к свойствам используется запись «через точку»:
                    </p>
                    <p>
                    <code class="help"> // получаем значение свойства объекта:
                    <br>
                    alert(secretObject.lectus); // 'Tortor, urna hac libero, sed o'
                    </code>
                    </p>
                    <p>
                    Министерство магии запросило у Гарри Поттера прочитать содержимое свитка <code class="help play">amet</code>. Давайте выведем в <code class="help play">alert</code> содержимое свитка <code class="help play">amet</code>. 
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    We can add new scrolls to our storage (object) at any time, delete scrolls or read the contents of any scroll.
                    To access properties, use the "dot" notation:
                    </p>
                    <p>
                    <code class="help"> // get object property value:
                    <br>
                    alert(secretObject.lectus); // 'Tortor, urna hac libero, sed o'
                    </code>
                    </p>
                    <p>
                    The Ministry of Magic asked Harry Potter to read the contents of the <code class="help play">amet</code> scroll. Let's display in <code class="help play">alert</code> the contents of the <code class="help play">amet</code> scroll.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before:
`secretObject = {
    lectus: 'Tortor, urna hac libero, sed o',
    amet: 'Ipsum sed vitae consectetur du',
    "cursus lacinia sed": 'Leo, dui habitasse velit in am'
}`,
            after: ``
    },
    {
        name: `level 5`,
            instructions: { 
            'ru': `
                    <p>
                    Как мы упоминали ранее, с помощью записи через точку мы можем добавлять новое свойство в объект:
                    </p>
                    <p>
                    <code class="help"> var user = {}; // объявляем пустой объект
                    <br>
                    user.name = "Pete"; // добавляем новое свойство в объект
                    <br>
                    alert(user.name); // Pete
                    </code>
                    </p>
                    <p>
                    Министерство Магии прислало еще три свитка.
                    </p>
                    <p>
                    Первый свиток называется: <code class="help play">consectetur</code> и содержит текст: <code class="help play">'Accumsan et. Sed non sed orci, nisi sed'</code>.
                    <br>
                    Второй свиток называется: <code class="help play">arcu</code> и содержит текст: <code class="help play">'Mattis id dictum. Justo nulla fauci'</code>.
                    <br>
                    Третий свиток называется: <code class="help play">augue</code> и содержит текст: <code class="help play">'Ut. Est. Dapibus in sed morbi tortor, vita'</code>.
                    </p>
                    <p>
                    Помогите Гарри Поттеру перезаписать эти свитки в хранилище используя запись через точку.
                    Напоминаем, что ссылку на объект мы ранее  записали в переменную <code class="help play">secretObject</code>. 
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    As we mentioned earlier, we can add a new property to an object using dot notation:
                    </p>
                    <p>
                    <code class="help"> var user = {}; // declare an empty object
                    <br>
                    user.name = "Pete"; // add a new property to the object
                    <br>
                    alert(username); // Pete
                    </code>
                    </p>
                    <p>
                    The Ministry of Magic sent three more scrolls.
                    </p>
                    <p>
                    The first scroll is called: <code class="help play">consectetur</code> and contains the text: <code class="help play">'Accumsan et. Sed non sed orci, nisi sed'</code>.
                    <br>
                    The second scroll is called: <code class="help play">arcu</code> and contains the text: <code class="help play">'Mattis id dictum. Justo nulla fauci'</code>.
                    <br>
                    The third scroll is called: <code class="help play">augue</code> and contains the text: <code class="help play">'Ut. Est. Dapibus in sed morbi tortor, vita'</code>.
                    </p>
                    <p>
                    Help Harry Potter overwrite these scrolls in the vault using dot notation.
                    We remind you that we previously wrote the reference to the object into the <code class="help play">secretObject</code> variable.
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 6`,
            instructions: { 
            'ru': `
                    <p>
                    Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает:
                    </P>
                    <p>
                    <code class="help">
                    // это вызовет синтаксическую ошибку
                    <br>
                    user.likes birds = true
                    </code>
                    </p>
                    <p>
                    JavaScript видит, что мы обращаемся к свойству user.likes, а затем идёт непонятное слово birds. В итоге синтаксическая ошибка.
                    Точка требует, чтобы ключ был именован по правилам именования переменных. То есть не имел пробелов, не начинался с цифры и не содержал специальные символы, кроме $ и _. Для 
                    таких случаев существует альтернативный способ доступа к свойствам через квадратные скобки. Такой способ сработает с любым именем свойства:
                    </p>
                    <p>
                    <code class="help">
                    var user = {};
                    <br>
                    // присваивание значения свойству
                    <br>
                    user["likes birds"] = true;
                    <br>
                    // получение значения свойства
                    <br>
                    alert(user["likes birds"]); // true
                    <br>
                    // удаление свойства
                    <br>
                    delete user["likes birds"];
                    </code>
                    </p>
                    <p>
                    Сейчас всё в порядке. Обратите внимание, что строка в квадратных скобках заключена в кавычки (подойдёт любой тип кавычек).
                    </p>
                    <p>
                    Министерство магии поручило Гарри Поттеру удалить свиток под названием <code class="help play">"cursus lacinia sed"</code>. Давайте поможем удалить этот свиток из нашего хранилища <code class="help play">secretObject</code>. 
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    For properties whose names consist of several words, accessing the value "through a dot" does not work:
                    </P>
                    <p>
                    <code class="help">
                    // this will cause a syntax error
                    <br>
                    user.likes birds = true
                    </code>
                    </p>
                    <p>
                    JavaScript sees that we are accessing the user.likes property, and then comes the incomprehensible word birds. The result is a syntax error.
                    The dot requires that the key be named according to the rules for naming variables. That is, it did not have spaces, did not start with a number, and did not contain special characters other than $ and _. For
                    In such cases, there is an alternative way to access properties through square brackets. This will work with any property name:
                    </p>
                    <p>
                    <code class="help">
                    var user = {};
                    <br>
                    // assigning a value to a property
                    <br>
                    user["like birds"] = true;
                    <br>
                    // get property value
                    <br>
                    alert(user["likes birds"]); // true
                    <br>
                    // delete property
                    <br>
                    delete user["like birds"];
                    </code>
                    </p>
                    <p>
                    Now everything is all right. Note that the string in square brackets is enclosed in quotation marks (any type of quotation mark will do).
                    </p>
                    <p>
                    The Ministry of Magic instructed Harry Potter to remove the scroll titled <code class="help play">"cursus lacinia sed"</code>. Let's help remove this scroll from our <code class="help play">secretObject</code> storage.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 7`,
            instructions: { 
            'ru': `
                    <p>
                    Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной:
                    </P>
                    <p>
                    <code class="help">
                    var key = "likes birds";
                    <br>
                    // то же самое, что и user["likes birds"] = true;
                    <br>
                    user[key] = true;
                    </code>
                    </p>
                    <p>
                    Здесь переменная key может быть вычислена во время выполнения кода или зависеть от пользовательского ввода. После этого мы используем её для доступа к свойству. Это даёт нам большую гибкость.
                    Пример:
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "John",
                    <br>
                    age: 30
                    <br>
                    };
                    <br>
                    var key = prompt("Что вы хотите узнать о пользователе?", "name");
                    <br>
                    // доступ к свойству через переменную
                    <br>
                    alert(user[key]); // John (если ввели "name")
                    </code>
                    </p>
                    <p>
                    Запись «через точку» такого не позволяет:
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "John",
                    <br>
                    age: 30
                    <br>
                    };
                    <br>
                    var key = "name";
                    <br>
                    alert(user.key); // undefined
                    </code>
                    </p>
                    <p>
                    Министерство магии прислало свиток без названия с текстом: <code class="help play">'Dictum morbi et. Aenean aenean sed vi'</code>.
                    Название свитка пришло отдельно в виде значения переменной <code class="help play">nameScroll</code>. Перезапишите свиток в наш объект <code class="help play">secretObject</code>
                    используя квадратные скобки и переменную <code class="help play">nameScroll</code>.
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
            <p>
                    Square brackets also allow you to refer to a property whose name can be the result of an expression. For example, a property name can be stored in a variable:
                    </P>
                    <p>
                    <code class="help">
                    var key = "like birds";
                    <br>
                    // same as user["likes birds"] = true;
                    <br>
                    user[key] = true;
                    </code>
                    </p>
                    <p>
                    Here, the key variable can be evaluated at runtime or depend on user input. After that, we use it to access the property. This gives us a lot of flexibility.
                    Example:
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "John",
                    <br>
                    age: 30
                    <br>
                    };
                    <br>
                    var key = prompt("What do you want to know about the user?", "name");
                    <br>
                    // access to the property through a variable
                    <br>
                    alert(user[key]); // John (if "name" was entered)
                    </code>
                    </p>
                    <p>
                    Notation "through a dot" does not allow this:
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "John",
                    <br>
                    age: 30
                    <br>
                    };
                    <br>
                    var key = "name";
                    <br>
                    alert(user. key); // undefined
                    </code>
                    </p>
                    <p>
                    The Ministry of Magic sent an untitled scroll with the text: <code class="help play">'Dictum morbi et. Aenean aenean sed vi'</code>.
                    The name of the scroll came separately as the value of the <code class="help play">nameScroll</code> variable. Overwrite the scroll in our object <code class="help play">secretObject</code>
                    using square brackets and <code class="help play">nameScroll</code> variable.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: `  var nameScroll = 'ornare';`,
            after: ``
    },
    {
        name: `level 8`,
            instructions: { 
            'ru': `
                    <p>
                    Существует специальный оператор <code class="help">"in"</code> для проверки существования свойства в объекте.
                    <br>
                    Синтаксис оператора:
                    </p>
                    <p>
                    <code class="help">
                    "key" in object
                    </code>
                    </p>
                    <p>
                    Пример:
                    </p>
                    <p>
                    <code class="help">
                    let user = {name: "John", age: 30};
                    <br>
                    <br>
                    alert("age" in user); // true, user.age</code> существует
                    <br>
                    <code class="help">
                    alert("blabla" in user); // false, user.blabla</code> не существует
                    </p>
                    <p>
                    Обратите внимание, что слева от оператора <code class="help">in</code> должно быть имя свойства. Обычно это строка в кавычках.
                    Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:
                    </p>
                    <p>
                    <code class="help">
                    let user = {age: 30};
                    <br>
                    let key = "age";
                    <br>
                    alert(key in user); // true</code>, имя свойства было взято из переменной <code class="help">key</code>
                    </p>
                    <p>
                    Бюрократы из Министерства магии запутались в том, какие свитки хранятся в <code class="help play">secretObject</code>. Они отправили запрос Гарри Поттеру с просьбой узнать, есть ли в хранилище свиток под названием <code class="help play">pellentesque</code>.
                    Помогите Гарри Поттеру проверить наличие данного свитка в хранилище с помощью <code class="help play">"in"</code>. Результат выведите в <code class="help play">alert</code>.
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                `,
            'en': `
                    <p>
                    There is a special operator <code class="help">"in"</code> to check if a property exists in an object.
                    <br>
                    Operator syntax:
                    </p>
                    <p>
                    <code class="help">
                    "key" in object
                    </code>
                    </p>
                    <p>
                    Example:
                    </p>
                    <p>
                    <code class="help">
                    let user = {name: "John", age: 30};
                    <br>
                    <br>
                    alert("age" in user); // true, user.age</code> exists
                    <br>
                    <code class="help">
                    alert("blabla" in user); // false, user.blabla</code> does not exist
                    </p>
                    <p>
                    Note that the <code class="help">in</code> statement must be the property name to the left of the statement. This is usually a quoted string.
                    If we omit the quotes, it means that we are specifying a variable that contains the property name. For example:
                    </p>
                    <p>
                    <code class="help">
                    let user = {age: 30};
                    <br>
                    let key = "age";
                    <br>
                    alert(key in user); // true</code>, the property name was taken from the variable <code class="help">key</code>
                    </p>
                    <p>
                    Bureaucrats from the Ministry of Magic are confused about which scrolls are stored in <code class="help play">secretObject</code>. They sent a request to Harry Potter asking if there was a scroll called <code class="help play">pellentesque</code> in the vault.
                    Help Harry Potter check if this scroll is in the vault with <code class="help play">"in"</code>. Output the result in <code class="help play">alert</code>.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 9`,
            instructions: { 
            'ru': `
                    <p>
                    Для перебора всех свойств объекта используется цикл <code class="help">for..in</code>.
                    <br>
                    Синтаксис:
                    <p>
                    <code class="help">
                    for (var key in object) {
                    <br>
                    //</code> тело цикла выполняется для каждого свойства объекта
                    <br>
                    <code class="help">}</code>
                    </p>
                    <p>
                    К примеру, давайте выведем все свойства объекта <code class="help">user:</code>
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "John",
                    <br>
                    age: 30,
                    <br>
                    isAdmin: true
                    <br>
                    };
                    <br>
                    for (var key in user) {
                    <br>
                    //</code> ключи
                    <code class="help">
                    alert(key);  // name, age, isAdmin
                    <br>
                    //</code> значения ключей
                    <code class="help">
                    <br>
                    alert(user[key]); // John, 30, true
                    <br>
                    }
                    </code>
                    </p>
                    <p>
                    Обратите внимание, что все конструкции «for» позволяют нам объявлять переменную внутри цикла, как, например, <code class="help">var key здесь.
                    <br>
                    Кроме того, мы могли бы использовать другое имя переменной. Например, часто используется вариант <code class="help">"for (var prop in obj)".
                    </P>
                    <p>
                    Также обратите внимание на выражение  <code class="help">alert(user[key])</code>. Переменная <code class="help">key</code> взята в квадратные скобки, так как это переменная а не конкретное имя свойства. 
                    В данной ситуации запись через точку работать не будет.
                    </p>
                    Давайте, обратимся к нашему объекту <code class="help play">secretObject</code> и выведем в <code class="help play">console.log</code> названия наших свитков, с помощью оператора <code class="help play">for..in</code>.
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    The loop <code class="help">for..in</code> is used to iterate over all properties of an object.
                    <br>
                    Syntax:
                    <p>
                    <code class="help">
                    for (var key in object) {
                    <br>
                    //</code> loop body is executed for each object property
                    <br>
                    <code class="help">}</code>
                    </p>
                    <p>
                    For example, let's display all the properties of the <code class="help">user:</code> object
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "John",
                    <br>
                    age: 30
                    <br>
                    isAdmin: true
                    <br>
                    };
                    <br>
                    for (var key in user) {
                    <br>
                    //</code> keys
                    <code class="help">
                    alert(key); // name, age, isAdmin
                    <br>
                    //</code> key values
                    <code class="help">
                    <br>
                    alert(user[key]); // John, 30, true
                    <br>
                    }
                    </code>
                    </p>
                    <p>
                    Note that all "for" constructs allow us to declare a variable inside the loop, like <code class="help">var key here.
                    <br>
                    Also, we could use a different variable name. For example, <code class="help">"for (var prop in obj)" is often used.
                    </P>
                    <p>
                    Also note the expression <code class="help">alert(user[key])</code>. The variable <code class="help">key</code> is enclosed in square brackets because it is a variable and not a specific property name.
                    In this situation, dot notation will not work.
                    </p>
                    Let's refer to our object <code class="help play">secretObject</code> and display in <code class="help play">console.log</code> the names of our scrolls using the <code class= operator "help play">for..in</code>.
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: `
for (var key in secretObject) {`,
            after: `};`
    },
    {
        name: `level 10`,
            instructions: { 
            'ru': `
                    <p>
                    Одним из фундаментальных отличий объектов от примитивных типов данных является то, что они хранятся и копируются «по ссылке».
                    <br>
                    Примитивные типы: строки, числа, логические значения – присваиваются и копируются «по значению».
                    <br>
                    Например:
                    </p>
                    <p>
                    <code class="help">
                    var message = "Привет!";
                    <br>
                    var phrase = message;
                    </code>
                    <p>
                    В результате мы имеем две независимые переменные, каждая из которых хранит строку "Привет!".
                    <br>
                    Объекты ведут себя иначе.
                    <br>
                    Переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него.
                    </p>
                    <p>
                    Если мы представляем объект как ящик, то переменная – это ключ к нему. Копирование переменной дублирует ключ, но не сам ящик.
                    <br>
                    Например:
                    <p>
                    <code class="help">
                    var user = {name: "Иван"};
                    <br>
                    var admin = user; //</code> копируется ссылка
                    <p>
                    Теперь у нас есть две переменные, каждая из которых содержит ссылку на один и тот же объект:
                    <br>
                    <p>
                    Сам объект хранится где-то в памяти. А в переменной <code class="help">user</code> лежит «ссылка» на эту область памяти.
                    <br>
                    Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.
                    </p>
                    <p>
                    К Гарри Поттеру приходила инспекция из Министерства магии. По результатам проверки ему вынесли предписание, 
                    в целях безопасности создать ещё один вход в подземное хранилище.
                    </p>
                    <p>
                    Давайте поможем Гарри Поттеру это сделать.
                    Для этого нам надо объявить новую переменную <code class="help play">var reserveEntrance</code> и присвоить ей ссылку на <code class="help play">secretObject</code>, как показано в примере выше.
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    One of the fundamental differences between objects and primitive data types is that they are stored and copied "by reference".
                    <br>
                    Primitive types: strings, numbers, booleans are assigned and copied "by value".
                    <br>
                    For example:
                    </p>
                    <p>
                    <code class="help">
                    varmessage = "Hi!";
                    <br>
                    var phrase = message;
                    </code>
                    <p>
                    As a result, we have two independent variables, each of which stores the string "Hello!".
                    <br>
                    Objects behave differently.
                    <br>
                    The variable does not store the object itself, but its "memory address", in other words, a "reference" to it.
                    </p>
                    <p>
                    If we represent an object as a box, then the variable is the key to it. Copying a variable duplicates the key, but not the box itself.
                    <br>
                    For example:
                    <p>
                    <code class="help">
                    var user = {name: "Ivan"};
                    <br>
                    var admin = user; //</code> the link is copied
                    <p>
                    We now have two variables, each holding a reference to the same object:
                    <br>
                    <p>
                    The object itself is stored somewhere in memory. And in the variable <code class="help">user</code> there is a “reference” to this memory area.
                    <br>
                    When an object variable is copied, the reference is copied, but the object itself is not duplicated.
                    </p>
                    <p>
                    Harry Potter was visited by an inspection from the Ministry of Magic. Based on the results of the inspection, he was issued an order,
                    for security reasons, create another entrance to the underground storage.
                    </p>
                    <p>
                    Let's help Harry Potter do it.
                    To do this, we need to declare a new variable <code class="help play">var reserveEntrance</code> and assign it a reference to <code class="help play">secretObject</code> as shown in the example above.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 11`,
            instructions: { 
            'ru': `
                    <p>
                    Как видно из картинки, теперь у нас есть две переменные (два наших входа), каждая из которых содержит ссылку на один и тот же объект (наше подземное хранилище).
                    Мы можем использовать любую из переменных для доступа к хранилищу и изменения его содержимого.
                    </p>
                    <p>
                    Из Министерства магии прислали еще три свитка.
                    </p>
                    <p>
                    Первый свиток называется: <code class="help play">eget</code> и содержит текст: <code class="help play">'Molestie sit nec vulputate habitasse pla'</code>.
                    <br>
                    Второй свиток называется: <code class="help play">eleifend</code> и содержит текст: <code class="help play">'Sed dapibus quis, sit velit vestibul'</code>.
                    <br>
                    Третий свиток называется: <code class="help play">justo</code> и содержит текст: <code class="help play">'Integer sapien consectetur sodales int'</code>.
                    </p>
                    <p>
                    Помогите Гарри Поттеру перезаписать эти свитки в хранилище используя второй вход <code class="help play">reserveEntrance</code>.
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                `,
            'en': `
                    <p>
                    As you can see from the picture, we now have two variables (our two inputs), each containing a reference to the same object (our underground storage).
                    We can use any of the variables to access the store and modify its contents.
                    </p>
                    <p>
                    Three more scrolls have been sent from the Ministry of Magic.
                    </p>
                    <p>
                    The first scroll is called: <code class="help play">eget</code> and contains the text: <code class="help play">'Molestie sit nec vulputate habitasse pla'</code>.
                    <br>
                    The second scroll is called: <code class="help play">eleifend</code> and contains the text: <code class="help play">'Sed dapibus quis, sit velit vestibul'</code>.
                    <br>
                    The third scroll is called: <code class="help play">justo</code> and contains the text: <code class="help play">'Integer sapien consectetur sodales int'</code>.
                    </p>
                    <p>
                    Help Harry Potter overwrite these scrolls in storage using the second entry <code class="help play">reserveEntrance</code>.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 12`,
            instructions: { 
            'ru': `
                    <p>
                    Из Министерства магии пришли тревожные вести. Волан-де-Морт узнал где находится наше секретное хранилище. 
                    В любую минуту он со воими последователями может напасть на наше хранилище. Если он получит в руки свитки с секретными заклинаниями, то никто не сможет его остановить. 
                    </p>
                    <p>
                    Помогите Гарри Поттеру создать новый пустой объект в другом месте. 
                    Объявите переменную <code class="help play">reserveObject</code> и присвойте ей ссылку на пустой объект. 
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                `,
            'en': `
                    <p>
                    Disturbing news came from the Ministry of Magic. Voldemort found out where our secret vault is located.
                    At any moment, he and his followers may attack our vault. If he gets his hands on scrolls with secret spells, then no one can stop him.
                    </p>
                    <p>
                    Help Harry Potter create a new empty object elsewhere.
                    Declare a <code class="help play">reserveObject</code> variable and give it a reference to an empty object.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 13`,
            instructions: { 
            'ru': `
                    <p>
                    Ранее мы говорили про то что, при копировании переменной с объектом создаётся ещё одна ссылка на тот же самый объект.
                    Но что, если нам всё же нужно дублировать объект? Создать независимую копию, клон?
                    Это выполнимо, но немного сложно, так как в JavaScript нет встроенного метода для этого. На самом деле, такая нужда возникает редко. В большинстве случаев нам достаточно копирования по ссылке.
                    Но если мы действительно этого хотим, то нам нужно создавать новый объект и повторять структуру дублируемого объекта, перебирая его свойства и копируя их.
                    Например так:
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "Иван",
                    <br>
                    age: 30
                    <br>
                    };
                    </p>
                    <p>
                    var clone = {}; //</code> новый пустой объект
                    </p>
                    <p>
                    // скопируем все свойства <code class="help">user</code> в него
                    </p>
                    <p>
                    <code class="help">
                    for (var key in user) {
                    <br>
                    clone[key] = user[key];
                    <br>
                    }
                    </code>
                    </p>
                    <p>
                    // теперь в переменной <code class="help">clone</code> находится абсолютно независимый клон объекта
                    </p>
                    <p>
                    <code class="help">
                    clone.name = "Пётр"; //</code> изменим в нём данные
                    <br>
                    <code class="help">
                    alert(user.name); //</code> в оригинальном объекте значение свойства <code class="help">'name'</code> осталось прежним – Иван.
                    </p>
                    <p>
                    Помогите Гарри Поттеру скопировать свитки из старого объекта <code class="help play">secretObject</code> в новый объект <code class="help play">reserveObject</code>.
                    </P>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    Earlier we talked about the fact that when copying a variable with an object, another link to the same object is created.
                    But what if we still need to duplicate the object? Create an independent copy, clone?
                    It's doable, but a little tricky, since JavaScript doesn't have a built-in method for doing this. In fact, such a need rarely arises. In most cases, copying by reference is enough for us.
                    But if we really want this, then we need to create a new object and repeat the structure of the duplicated object, iterating over its properties and copying them.
                    For example like this:
                    </p>
                    <p>
                    <code class="help">
                    var user = {
                    <br>
                    name: "Ivan",
                    <br>
                    age: 30
                    <br>
                    };
                    </p>
                    <p>
                    var clone = {}; //</code> new empty object
                    </p>
                    <p>
                    // copy all <code class="help">user</code> properties into it
                    </p>
                    <p>
                    <code class="help">
                    for (var key in user) {
                    <br>
                    clone[key] = user[key];
                    <br>
                    }
                    </code>
                    </p>
                    <p>
                    // now the variable <code class="help">clone</code> contains an absolutely independent clone of the object
                    </p>
                    <p>
                    <code class="help">
                    clone.name = "Peter"; //</code> change the data in it
                    <br>
                    <code class="help">
                    alert(username); //</code> in the original object, the value of the <code class="help">'name'</code> property remains the same – Ivan.
                    </p>
                    <p>
                    Help Harry Potter copy the scrolls from the old <code class="help play">secretObject</code> object to the new <code class="help play">reserveObject</code> object.
                    </P>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: `for (var key in secretObject) {`,
            after: `}`
    },
    {
        name: `level 14`,
            instructions: { 
            'ru': `
                    <p>
                    Операторы равенства <code class="help">==</code> и строгого равенства <code class="help">===</code> для объектов работают одинаково.
                    <br>
                    Два объекта равны только в том случае, если это один и тот же объект.
                    <br>
                    В примере ниже две переменные ссылаются на один и тот же объект, поэтому они равны друг другу:
                    <p>
                    <code class="help">
                    var a = {};
                    <br>
                    var b = a; //</code> копирование по ссылке
                    <br>
                    <code class="help">
                    alert(a == b); // true</code>, т.к. обе переменные ссылаются на один и тот же объект
                    <br>
                    <code class="help">
                    alert(a === b); // true
                    </code>
                    </p>
                    <p>
                    В другом примере два разных объекта не равны, хотя оба пусты:
                    </p>
                    <p>
                    <code class="help">
                    var a = {};
                    var b = {}; //</code> два независимых объекта
                    </p>
                    <p>
                    <code class="help">
                    alert(a == b); // false
                    </code>
                    </p>
                    <p>
                    Сравните между собой <code class="help play">reserveObject</code> и <code class="help play">secretObject</code>. Также можете сравнить <code class="help play">secretObject</code> и <code class="help play">reserveEntrance</code>. 
                    Результаты сравнения выведите в <code class="help play">alert</code>.
                    </P>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    The equality operators <code class="help">==</code> and the strict equality operators <code class="help">===</code> work the same for objects.
                    <br>
                    Two objects are only equal if they are the same object.
                    <br>
                    In the example below, two variables refer to the same object, so they are equal to each other:
                    <p>
                    <code class="help">
                    var a = {};
                    <br>
                    var b = a; //</code> copy by reference
                    <br>
                    <code class="help">
                    alert(a == b); // true</code> because both variables refer to the same object
                    <br>
                    <code class="help">
                    alert(a === b); // true
                    </code>
                    </p>
                    <p>
                    In another example, two different objects are not equal even though both are empty:
                    </p>
                    <p>
                    <code class="help">
                    var a = {};
                    var b = {}; //</code> two independent objects
                    </p>
                    <p>
                    <code class="help">
                    alert(a == b); // false
                    </code>
                    </p>
                    <p>
                    Compare <code class="help play">reserveObject</code> and <code class="help play">secretObject</code>. You can also compare <code class="help play">secretObject</code> and <code class="help play">reserveEntrance</code>.
                    Display the comparison results in <code class="help play">alert</code>.
                    </P>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 15`,
            instructions: { 
            'ru': `
                    <p>
                    Вы помогли Гарри Поттеру создать новое хранилище и перезаписать туда свитки. Теперь надо
                    уничтожить старое хранилище. Чтобы стереть объект надо переменной, которая ссылается на объект 
                    присвоить <code class="help">null</code>.
                    <br>
                    </p>
                    <p>
                    <code class="help">
                    var obj = {};
                    <br>
                    obj = null;
                    </code>
                    </p>
                    <p>
                    Присвойте переменной <code class="help play">secretObject</code> значение <code class="help play">null</code>.
                    </p>
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                `,
            'en': `
                    <p>
                    You helped Harry Potter create a new vault and overwrite the scrolls there. Now we need
                    destroy the old repository. To erase an object, you need a variable that refers to the object
                    assign <code class="help">null</code>.
                    <br>
                    </p>
                    <p>
                    <code class="help">
                    var obj = {};
                    <br>
                    obj = null;
                    </code>
                    </p>
                    <p>
                    Set the variable <code class="help play">secretObject</code> to <code class="help play">null</code>.
                    </p>
                    <p>
                    After writing the code, press Enter.
                    </p>
                    `
            },
            before: ``,
            after: ``
    },
    {
        name: `level 16`,
            instructions: { 
            'ru': `
                    <p>
                    Как видно на изображении, после того как мы присвоили переменной secretObject значение null, исчез первый вход.
                    Само хранилище (наш объект) не было стерто. Это произошло потому что, пока на объект ссылается хотя бы одна переменная он не будет стерт.
                    Для того чтобы объект был стерт, надо всем перменным которые ссылаются на него присвоить null или перезаписать в них другое значение.
                    После того, как будут стерты (перезаписаны) все ссылки на объект, "сборщик мусора" сотрет из памяти объект.
                    </p>
                    <p>
                    Присвойте переменной <code class="help play">reserveEntrance</code> значение <code class="help play">null</code> и наблюдайте за тем, что произойдет с хранилищем.
                    <p>
                    После написания кода нажмите Enter.
                    </p>
                    `,
            'en': `
                    <p>
                    As you can see in the image, after we set the secretObject variable to null, the first input disappeared.
                    The repository itself (our object) has not been erased. This happened because as long as at least one variable refers to the object, it will not be erased.
                    In order for an object to be deleted, all variables that refer to it must be assigned null or overwritten with another value.
                    After all references to the object have been erased (overwritten), the "garbage collector" will erase the object from memory.
                    </p>
                    <p>
                    Set the <code class="help play">reserveEntrance</code> variable to <code class="help play">null</code> and watch what happens to the store.
                    <p>
                    After writing the code, press Enter.
                    </p>
                `
            },
            before: ``,
            after: ``
    },
];

