import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; 

function Post (props) {

   const {id} = useParams();
   const [post, setPost] = useState([])

   
    useEffect(()=> {
           fetch(`https://staging.usatukirill96.com/api/post/${id}`)
           .then(res => res.json())  
           .then(data => setPost(data))
    }, [id])


    function createMarkup() {
        return {__html: post.text};
    }

   

    return(
        <div className={'app'}> 
            <section className="page" key={post.id}>
                <div className="column" key={post.id}>   
                    <div>  
                        <h3 className="header_name" key={post.id}>{post.title}</h3>
                        <div className="_image ">
                            <img className="image" src={post.image} alt={post.title}/> 
                        </div>
                        <div className='text'>
                            {/* <div dangerouslySetInnerHTML={createMarkup()}/> */}
                            <h1>Что будем делать </h1>
                             Разбирать работу с ошибками в python:
                             <ul> 
                                <li><a href=\"#catch\">Отлавливать ошибки</a></li> 
                                <li><a href=\"#exceptions\">Заводить собственные исключения, а также обсудим иерархию</a></li> 
                                <li><a href=\"#inheritance\">Наследовать исключения и отлавливать наследников</a></li> 
                                <li><a href=\"#else-finally\">Поговорим про else и finally</a></li> 
                                <li><a href=\"#performance\">Посмотрим на производительность разных подходов</a></li> 
                            </ul> 
                            Напишем простую функцию и обернем ее так, чтобы пользователю было комфортно работать с ней и обрабатывать возможные исключения 
                            <img class=\"img-fluid\" src=\"https://ru.usatukirill96.com/uploads/upload-3700007880.png\" width=\"100%\"> <br><br> 
                            <a id=\"catch\"><h1>Ловим ошибку </h1></a> 
                            <br><br> 
                            <text> Исключения (ошибки) в python можно отловить и обработать, используя конструкцию try-except. Она имеет следующий синтаксис: </text> 
                            <pre><code class=\"language-python\"> try: # Опасный код except: # Что делать, если в коде произошла ошибка else: # Что делать, если ошибок не было finally: # Чем завершить блок (этот код будет выполнен, не важно произошла ли ошибка) </code></pre>
                            Представим, у нас есть функция для деления двух чисел 
                            <pre><code> def divide(a: int, b: int) -> int: return a/b if __name__ == \"__main__\": print(divide(1, 0)) </code></pre> 
                            При выполнении эта функция может выдать ошибку, например в качестве аргумента b передали ноль или один из аргументов вообще не является числом. 
                            <pre><code> Traceback (most recent call last): File \"<stdin>\", line 2, in <module> File \"<stdin>\", line 2, in divide ZeroDivisionError: division by zero </code></pre> 
                            Мы можем аккуратно сообщить об этом пользователю, обернув выполнение функции в блок try. Обратите внимание на конструкцию 
                            <code>except Exception as err</code> 
                            - она позволяет получить текстовое описание ошибки, чтобы впоследствии показать его пользователю или добавить в логи. 
                            <pre><code> def divide(a: int, b: int) -> int: return a/b if __name__ == \"__main__\": try: print(divide(1, 0)) except Exception as err: print(f\"Произошла ошибка при делении: {err}\") </code></pre> 
                            Вывод уже лучше: 
                            <br><samp>Произошла ошибка при делении: division by zero</samp></br> 
                            Но все еще недостаточно хорошо: хотелось бы выводить разные сообщения в зависимости от ошибок <br> 
                            Блок except может быть описан несколько раз с указанием конкретной ошибки 
                            <pre><code> def divide(a: int, b: int) -> int: return a/b if __name__ == \"__main__\": try: print(divide(1, 0)) except ZeroDivisionError: print(\"Нельзя делить на ноль\") except TypeError: print(\"Неподходящий тип данных для деления, используйте только числа\") except Exception as err: print(f\"Неопознанная ошибка: {err}\") </code></pre> 
                            На всякий случай в конце указываем Exception. Где-то в коде может произойти ошибка, которую мы не учли, поэтому стоит обработать все \"неизвестные\" случаи. <br> 
                            Обратите внимание, что родительское <code>Exception</code> указывают последним. Программные исключения в python наследуются от 
                            <code>Exception</code>. 
                            Если в блоке 
                            <code>try</code> 
                            произошла ошибка, исключения будут перебираться сверху вниз, и если расположить родительское исключение в начале, до второй строки проверка уже не дойдет. <br><br> 
                            <h2>Exception или BaseException</h2> <br> 
                            Часто студенты \"упрощают\" конструкцию try-except, и пишут следующее: 
                            <pre><code> try: .... except: ... </code></pre> Блок 
                            <code>except:</code> 
                            без указания исключения равносилен тому, чтобы написать 
                            <code> except BaseException</code>. 
                            Так в чем проблема? <br> 
                            <code>except BaseException</code> 
                            отловит любую ошибку, также связанную с пользовательским вводом. К примеру, если вы попытаетесь выйти из программы, прерывание сочетанием клавиш 
                            <code>ctrl+c</code> 
                            будет отловлено. Скопируйте код ниже в консоль и попробуйте выйти из него до того, как таймер достигнет 10 
                            <pre><code> for i in range(1, 11): try: print(i) time.sleep(0.5) except: print(\"Сегодня никуда не идешь\") </code></pre> 
                            Программа продолжит выполняться, не позволяя вам выйти до завершения <br> 
                            <a href=\"https://docs.python.org/3/library/exceptions.html#BaseException\">Документация к BaseException и Exception</a> <br><br> 
                            <a id=\"exceptions\"><h1>Заводим собственные исключения </h1></a> <br><br> 
                            Окей, с обработкой разобрались, но кажется неправильным, что при вызове функции нужно задумываться обо всех ошибках, которые могут произойти внутри. Это увеличивает сложность кода и содает вероятность что-то упустить. Поэтому создадим собственные исключения для функции 
                            <code>divide(int, int)</code> 
                            <pre><code> class DivisionError(Exception): \"\"\"Ошибка при делении чисел\"\"\" def divide(a: int, b: int) -> int: \"\"\" Делит число a на b :raises DivisionError: Если деление a на b невозможно \"\"\" try: return a/b except ZeroDivisionError: raise DivisionError(\"Нельзя делить на ноль\") except TypeError: raise DivisionError(\"Неподходящий тип данных для деления, используйте только числа\") except Exception as err: raise DivisionError(f\"Неопознанная ошибка: {err}\") if __name__ == \"__main__\": try: print(divide(1, 0)) except DivisionError as err: print(err) </code></pre> 
                            Теперь пользователя функции не заботит, какие ошибки могут произойти под капотом. Он ориентируется на некоторые конкретные ошибки, описанные в документации. <br> 
                            Иерархия работы с исключениями напоминает работу компании: каждый следующий слой не интересуется деталями работы нижнего, но пользуется некоторым API в виде исключений. 
                            <img class=\"img-fluid\" src=\"https://ru.usatukirill96.com/uploads/upload-3006568911.png\" width=\"100%\"> 
                            Структура напоминает доклад о проблемах в реальной компании: 
                                <ul> 
                                    <li>Программист тимлиду: я не могу решить задачу вовремя, потому что не работал с этой технологией (тимлида волнует наличие проблемы, а не то что разработчик не смог реализовать конкретный класс в коде)</li> 
                                    <li>Тимлид менеджеру: мы не сможем взять фичу в спринт, потому что не успеваем (менеджера волнуют сроки, а не то что программист не работал с технологией)</li> 
                                    <li>Менеджер заказчику: Мы не сможем доставить весь запрошенный функционал, потому что одна из задач в него не попадает (заказчика волнует польза для бизнеса, а не то что у команды сорвался спринт)</li> 
                                </ul> 
                                Соответственно, когда мы хотим обобщить внутреннюю ошибку, структура должна быть следующей: 
                                <pre><code> class MyCustomException(Exception): \"\"\"Исключение для работы с моим модулем\"\"\" try: # Выполняем какой-то код except (Exception1, Exception2): # Базовое исключение или несколько конкретных исключений, которые нужно отловить raise MyCustomException(\"Произошла ошибка при выполнении моей функции\") except Exception as err: raise MyCustomException(f\"Неизвестная ошибка: {err}\") </code></pre> 
                                <img class=\"img-fluid\" src=\"https://ru.usatukirill96.com/uploads/upload-3032130327.png\" width=\"100%\"> <br><br> 
                                <a id=\"inheritance\"><h1>О наследовании исключений</h1></a> <br><br> 
                                Почему 
                                <code>except Exception </code> 
                                отлавливает вообще все исключения? Все дело в том, что в блок 
                                <code>except</code> 
                                попадет как указанное исключение, так и все его наследники. 
                                <pre><code> class DivisionError(IOError): \"\"\"Ошибка при делении чисел\"\"\" ....... try: print(divide(1, 0)) except IOError as err: print(err) </code></pre> 
                                В примере выше мы смогли отловить ошибку DivisionError в блоке 
                                <code>except IOError</code>, 
                                потому что она является наследником. Это может быть полезно, когда с нашим модулем работает другой код, ожидающий увидеть более стандартные ошибки <br><br> 
                                <a id=\"else-finally\"><h1>else и finally</h1></a> <br><br> 
                                Пришло новое требование: теперь при выполнении функции 
                                <code>divide(int, int)</code> 
                                нужно логгировать успешные и неуспешные случаи, а также писать в стандартный вывод о том, что выполнение функции закончено. 
                                <code><pre> import logging # тело функции divide осталось без изменений if __name__ == \"__main__\": try: print(divide(1, 0)) except DivisionError as err: logging.error(err) else: logging.info(\"Произведено деление\") finally: print(\"Завершилась функция divide\") </code></pre> <br> 
                                Код в блоке 
                                <code>finally</code> 
                                будет выполнен в любом случае после обработки ошибки либо после завершения блоков try и else. <br> 
                                Код в блоке 
                                <code>else</code> 
                                выполнится только если исключение не произойдет. Это может быть полезно, если мы не хотим чтобы ошибка в нем была отловлена. Например, если указать логгирование в блоке try, можно соврать пользователю 
                                <code><pre> try: print(divide(1, 0)) logging.info(\"Произведено деление\") # Так получилось, что логгер был настроен неправильно, и тут вылетит ошибка except Exception as err: logging.error(f\"Не получилось разделить числа: {err}\") # Но ведь числа разделить получилось, ошибка была в логгере </code></pre> <br><br> 
                                <a id=\"performance\"><h1>О производительности</h1></a> <br> 
                                При обработке опасных моментов в python может быть два подхода: <br><br> 
                                <h3>Сначала проверь, потом действуй </h3> <br> 
                                В этом случае мы сначала проверяем опасные места через 
                                <code> if else </code> 
                                <pre><code> def get_tz(city: str) -> str: timezones: Dict[str, str] = { \"Ufa\": \"+5\", \"Moscow\": \"+3\", \"Belgrade\": \"+2\" } if city not in timezones: raise KeyError(f\"Для города {city} таймзоны нет\") return timezones[city] </code></pre> 
                                <h3>Сначала сделай, потом попроси прощения</h3> <br> 
                                В этом случае мы оборачиваем опасный участок кода в try-except, и выполняем как будто все должно работать без ошибок 
                                <pre><code> def get_tz(city: str) -> str: timezones: Dict[str, str] = { \"Ufa\": \"+5\", \"Moscow\": \"+3\", \"Belgrade\": \"+2\" } try: return timezones[city] except KeyError: raise KeyError(f\"Для города {city} таймзоны нет\") </code></pre> 
                                <h3> Сравнение </h3> <br> 
                                В питоне принято руководствоваться вторым подходом, и в основном стоит ориентироваться на него. <br> 
                                <a href=\"https://stackoverflow.com/a/2522013/15483869\">Вот тут</a> 
                                есть сравнение производительности. Если кратко, основные тезисы следующие: 
                                    <ul> 
                                        <li>Если код выполняется без ошибки, быстрее работает try-except</li> 
                                        <li>Если ошибка случается, быстрее работает конструкция с if condition</li> 
                                    </ul> 
                                То есть конструкция 
                                <code>try except</code> 
                                должна только для обработки ошибок. Если нужно вернуть альтернативное значение, и кейс с ошибкой часто повторяется, стоит использовать 
                                <code>if-else</code>
                         </div>
                    </div>
                </div>
            </section>
            
        </div>
    )  
}

export default Post