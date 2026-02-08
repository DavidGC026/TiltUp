import { Exam, ExamQuestion, ExamQuestionOption } from '@shared/schema';

export const initialExams: Exam[] = [
  {
    "id": "exam-sec-1-1",
    "sectionId": "sec-1-1",
    "title": "Examen Diagn\u00f3stico",
    "description": "Preguntas y opciones importadas desde EXAMEN DIAGN\u00d3STICO.xlsx"
  },
  {
    "id": "exam-sec-1-5",
    "sectionId": "sec-1-5",
    "title": "Examen Final",
    "description": "Examen Final generado a partir del Diagn\u00f3stico"
  },
  {
    "id": "exam-sec-2-1",
    "sectionId": "sec-2-1",
    "title": "Examen Diagn\u00f3stico M\u00f3dulo 2",
    "description": "Preguntas importadas desde EXAMEN_DIAGN\u00d3STICO_MODULO2.xlsx"
  },
  {
    "id": "exam-sec-2-5",
    "sectionId": "sec-2-5",
    "title": "Examen Final M\u00f3dulo 2",
    "description": "Examen Final generado a partir del Diagn\u00f3stico"
  },
  {
    "id": "exam-sec-3-1",
    "sectionId": "sec-3-1",
    "title": "Examen Diagn\u00f3stico M\u00f3dulo 3",
    "description": "Preguntas importadas desde EXAMEN DIAGN\u00d3STICO_MODULO3.xlsx"
  },
  {
    "id": "exam-sec-3-5",
    "sectionId": "sec-3-5",
    "title": "Examen Final M\u00f3dulo 3",
    "description": "Examen Final generado a partir del Diagn\u00f3stico"
  }
];

export const initialQuestions: ExamQuestion[] = [
  {
    "id": "exam-sec-1-1-q001",
    "examId": "exam-sec-1-1",
    "questionNumber": 1,
    "questionText": "\u00bfC\u00f3mo se define el m\u00e9todo de Tilt-Up?"
  },
  {
    "id": "exam-sec-1-1-q002",
    "examId": "exam-sec-1-1",
    "questionNumber": 2,
    "questionText": "\u00bfCu\u00e1l de las siguientes es una caracter\u00edstica de los paneles de Tilt-Up?"
  },
  {
    "id": "exam-sec-1-1-q003",
    "examId": "exam-sec-1-1",
    "questionNumber": 3,
    "questionText": "La____________ y__________ son ventajas del m\u00e9todo Tilt-Up."
  },
  {
    "id": "exam-sec-1-1-q004",
    "examId": "exam-sec-1-1",
    "questionNumber": 4,
    "questionText": "Supera cualquier otra opci\u00f3n que ofrecen mamposter\u00eda y madera"
  },
  {
    "id": "exam-sec-1-1-q005",
    "examId": "exam-sec-1-1",
    "questionNumber": 5,
    "questionText": "El mayor porcentaje del uso de este m\u00e9todo constructivo se encuentra en el sector industrial"
  },
  {
    "id": "exam-sec-1-1-q006",
    "examId": "exam-sec-1-1",
    "questionNumber": 6,
    "questionText": "\u00bfCual es el primer paso del proceso?"
  },
  {
    "id": "exam-sec-1-1-q007",
    "examId": "exam-sec-1-1",
    "questionNumber": 7,
    "questionText": "Se lleva a cabo despu\u00e9s de colocar los paneles de muros"
  },
  {
    "id": "exam-sec-1-1-q008",
    "examId": "exam-sec-1-1",
    "questionNumber": 8,
    "questionText": "\u00bfQue debo llevar acabo antes de retirar las riostras del muro?"
  },
  {
    "id": "exam-sec-1-1-q009",
    "examId": "exam-sec-1-1",
    "questionNumber": 9,
    "questionText": "\u00bfCu\u00e1l es el siguiente paso despu\u00e9s de limpiar las caras?"
  },
  {
    "id": "exam-sec-1-1-q010",
    "examId": "exam-sec-1-1",
    "questionNumber": 10,
    "questionText": "El ______ forma parte de los acabados para los paneles"
  },
  {
    "id": "exam-sec-1-1-q011",
    "examId": "exam-sec-1-1",
    "questionNumber": 11,
    "questionText": "\u00bfCuantas clasificaciones b\u00e1sicas hay de cemento Portland?"
  },
  {
    "id": "exam-sec-1-1-q012",
    "examId": "exam-sec-1-1",
    "questionNumber": 12,
    "questionText": "\u00bfEn que consiste el SCM que predomina en el concreto para tilt-up?"
  },
  {
    "id": "exam-sec-1-1-q013",
    "examId": "exam-sec-1-1",
    "questionNumber": 13,
    "questionText": "El agua utilizada para las mezclas de concreto tilt-up no necesita ser potable"
  },
  {
    "id": "exam-sec-1-1-q014",
    "examId": "exam-sec-1-1",
    "questionNumber": 14,
    "questionText": "La cantidad de aire atrapado en el concreto es mayor que el 2%"
  },
  {
    "id": "exam-sec-1-1-q015",
    "examId": "exam-sec-1-1",
    "questionNumber": 15,
    "questionText": "\u00bfCual es el porcentaje del volumen de concreto que conforman los agregados?"
  },
  {
    "id": "exam-sec-1-1-q016",
    "examId": "exam-sec-1-1",
    "questionNumber": 16,
    "questionText": "Permiten obtener la resistencia de 28 d\u00edas a los 7 d\u00edas"
  },
  {
    "id": "exam-sec-1-1-q017",
    "examId": "exam-sec-1-1",
    "questionNumber": 17,
    "questionText": "Permiten una reducci\u00f3n en la dosificaci\u00f3n del agua"
  },
  {
    "id": "exam-sec-1-1-q018",
    "examId": "exam-sec-1-1",
    "questionNumber": 18,
    "questionText": "Un beneficio de usar este aditivo es una menor segregaci\u00f3n"
  },
  {
    "id": "exam-sec-1-1-q019",
    "examId": "exam-sec-1-1",
    "questionNumber": 19,
    "questionText": "El beneficioso para reducir las presiones necesarias para el bombeo"
  },
  {
    "id": "exam-sec-1-1-q020",
    "examId": "exam-sec-1-1",
    "questionNumber": 20,
    "questionText": "El revenimiento debes estar en un rango de 100 a 125 mm"
  },
  {
    "id": "exam-sec-1-1-q021",
    "examId": "exam-sec-1-1",
    "questionNumber": 21,
    "questionText": "\u00bfCual es la resistencia m\u00ednima especifica del concreto para losa de piso a 28 d\u00edas?"
  },
  {
    "id": "exam-sec-1-1-q022",
    "examId": "exam-sec-1-1",
    "questionNumber": 22,
    "questionText": "\u00bfCual es la resistencia m\u00ednima para mezclas de cimentaci\u00f3n?"
  },
  {
    "id": "exam-sec-1-1-q023",
    "examId": "exam-sec-1-1",
    "questionNumber": 23,
    "questionText": "Tama\u00f1o m\u00e1ximo de agregado para la losa de piso"
  },
  {
    "id": "exam-sec-1-1-q024",
    "examId": "exam-sec-1-1",
    "questionNumber": 24,
    "questionText": "Tama\u00f1o m\u00e1ximo de agregado para los paneles es de 25 mm"
  },
  {
    "id": "exam-sec-1-1-q025",
    "examId": "exam-sec-1-1",
    "questionNumber": 25,
    "questionText": "Las fuerzas incurridas durante el proceso de levantamiento son a menudo m\u00e1s menores que las que se encuentran durante la ocupaci\u00f3n de la construcci\u00f3n"
  },
  {
    "id": "exam-sec-1-1-q026",
    "examId": "exam-sec-1-1",
    "questionNumber": 26,
    "questionText": "El refuerzo de acero se usa para soportar las fuerzas de flexi\u00f3n"
  },
  {
    "id": "exam-sec-1-1-q027",
    "examId": "exam-sec-1-1",
    "questionNumber": 27,
    "questionText": "\u00bfQue tama\u00f1o de barras de refuerzo no es com\u00fan en los paneles?"
  },
  {
    "id": "exam-sec-1-1-q028",
    "examId": "exam-sec-1-1",
    "questionNumber": 28,
    "questionText": "\u00bfCu\u00e1l es el \u00e1rea nominal de las varillas del numero 5?"
  },
  {
    "id": "exam-sec-1-1-q029",
    "examId": "exam-sec-1-1",
    "questionNumber": 29,
    "questionText": "La malla de refuerzo electrosoldado es un producto recomendado para uso en tilt-up"
  },
  {
    "id": "exam-sec-1-1-q030",
    "examId": "exam-sec-1-1",
    "questionNumber": 30,
    "questionText": "\u00bfQu\u00e9 peso deben soportar las silletas?"
  },
  {
    "id": "exam-sec-1-1-q031",
    "examId": "exam-sec-1-1",
    "questionNumber": 31,
    "questionText": "\u00bfCu\u00e1l es el material mas com\u00fan para moldear las losas?"
  },
  {
    "id": "exam-sec-1-1-q032",
    "examId": "exam-sec-1-1",
    "questionNumber": 32,
    "questionText": "\u00bfQue tipo de desmoldante forma jabones met\u00e1licos para la adhesi\u00f3n?"
  },
  {
    "id": "exam-sec-1-1-q033",
    "examId": "exam-sec-1-1",
    "questionNumber": 33,
    "questionText": "\u00bfCu\u00e1l es el m\u00e9todo de aplicaci\u00f3n del aislamiento?"
  },
  {
    "id": "exam-sec-1-1-q034",
    "examId": "exam-sec-1-1",
    "questionNumber": 34,
    "questionText": "Grosor est\u00e1ndar de ladrillos para acabado"
  },
  {
    "id": "exam-sec-1-1-q035",
    "examId": "exam-sec-1-1",
    "questionNumber": 35,
    "questionText": "Es un factor que afecta el curado del concreto"
  },
  {
    "id": "exam-sec-1-1-q036",
    "examId": "exam-sec-1-1",
    "questionNumber": 36,
    "questionText": "La _____ es especialmente importante en proyectos de tilt-up que tienen grandes superficies de losas sobre el terreno"
  },
  {
    "id": "exam-sec-1-1-q037",
    "examId": "exam-sec-1-1",
    "questionNumber": 37,
    "questionText": "El costal de arpilleria puede usarse cono recubrimiento para el curado"
  },
  {
    "id": "exam-sec-1-1-q038",
    "examId": "exam-sec-1-1",
    "questionNumber": 38,
    "questionText": "El recubrimiento se dejara en su lugar de 6 a 5 d\u00edas"
  },
  {
    "id": "exam-sec-1-1-q039",
    "examId": "exam-sec-1-1",
    "questionNumber": 39,
    "questionText": "El curado predominante para \u00e1reas grandes de  concreto es rociar la superficie con un compuesto liquido."
  },
  {
    "id": "exam-sec-1-1-q040",
    "examId": "exam-sec-1-1",
    "questionNumber": 40,
    "questionText": "\u00bfApartir de que temperatura deben tomarse medidas para reducir el agrietamiento en la losas?"
  },
  {
    "id": "exam-sec-1-1-q041",
    "examId": "exam-sec-1-1",
    "questionNumber": 41,
    "questionText": "Puede usarse una mezcla menos densa para acelerar la obtenci\u00f3n de resistencia en tiempo frio"
  },
  {
    "id": "exam-sec-1-1-q042",
    "examId": "exam-sec-1-1",
    "questionNumber": 42,
    "questionText": "El aditivo incorporador de aire no se a\u00f1ade durante la mezcla de concreto"
  },
  {
    "id": "exam-sec-1-1-q043",
    "examId": "exam-sec-1-1",
    "questionNumber": 43,
    "questionText": "Las emisiones de bi\u00f3xido de carbono en espacios cerrados afectan el curado del concreto durante las primeras 24 horas"
  },
  {
    "id": "exam-sec-1-1-q044",
    "examId": "exam-sec-1-1",
    "questionNumber": 44,
    "questionText": "Para que el calor de los paneles apilados sea de ayuda en clima frio el tiempo de vaciado de pisos sucesivos no debe superar______"
  },
  {
    "id": "exam-sec-1-1-q045",
    "examId": "exam-sec-1-1",
    "questionNumber": 45,
    "questionText": "\u00bfCual es la temperatura m\u00ednima a la que se recomienda colar?"
  },
  {
    "id": "exam-sec-1-1-q046",
    "examId": "exam-sec-1-1",
    "questionNumber": 46,
    "questionText": "Dejar cualquier molde en su lugar el mayor tiempo posible ayuda a distribuir el calor sobre superficie del concreto"
  },
  {
    "id": "exam-sec-1-1-q047",
    "examId": "exam-sec-1-1",
    "questionNumber": 47,
    "questionText": "Es un aspecto de dise\u00f1o"
  },
  {
    "id": "exam-sec-1-1-q048",
    "examId": "exam-sec-1-1",
    "questionNumber": 48,
    "questionText": "Debe analizarse durante la etapa de preconstrucci\u00f3n"
  },
  {
    "id": "exam-sec-1-1-q049",
    "examId": "exam-sec-1-1",
    "questionNumber": 49,
    "questionText": "Documento que incluye la ubicaci\u00f3n de los insertos"
  },
  {
    "id": "exam-sec-1-1-q050",
    "examId": "exam-sec-1-1",
    "questionNumber": 50,
    "questionText": "Documento que incluye las dimensiones del panel"
  },
  {
    "id": "exam-sec-1-1-q051",
    "examId": "exam-sec-1-1",
    "questionNumber": 51,
    "questionText": "El espesor del panel y su refuerzo de acero proporcionan una resistencia a las siguientes fuerzas"
  },
  {
    "id": "exam-sec-1-1-q052",
    "examId": "exam-sec-1-1",
    "questionNumber": 52,
    "questionText": "Es la altura sin soporte"
  },
  {
    "id": "exam-sec-1-1-q053",
    "examId": "exam-sec-1-1",
    "questionNumber": 53,
    "questionText": "Las moldaduras no reducen el espesor estructural"
  },
  {
    "id": "exam-sec-1-1-q054",
    "examId": "exam-sec-1-1",
    "questionNumber": 54,
    "questionText": "\u00bfQue significa modular el edificio?"
  },
  {
    "id": "exam-sec-1-1-q055",
    "examId": "exam-sec-1-1",
    "questionNumber": 55,
    "questionText": "\u00bfCual es la longitud que debe evitarse en paneles de dintel?"
  },
  {
    "id": "exam-sec-1-1-q056",
    "examId": "exam-sec-1-1",
    "questionNumber": 56,
    "questionText": "\u00bfCual es la longitud minia que debe tener un panel solido entre aberturas o abertura y borde de un panel?"
  },
  {
    "id": "exam-sec-1-1-q057",
    "examId": "exam-sec-1-1",
    "questionNumber": 57,
    "questionText": "Es un factor que influye en el tama\u00f1o de un panel"
  },
  {
    "id": "exam-sec-1-1-q058",
    "examId": "exam-sec-1-1",
    "questionNumber": 58,
    "questionText": "El tama\u00f1o de un panel afecta el tiempo de levantamiento"
  },
  {
    "id": "exam-sec-1-1-q059",
    "examId": "exam-sec-1-1",
    "questionNumber": 59,
    "questionText": "\u00bfQue determina un panel fuera de plano?"
  },
  {
    "id": "exam-sec-1-1-q060",
    "examId": "exam-sec-1-1",
    "questionNumber": 60,
    "questionText": "Los paneles curvos son mas costos"
  },
  {
    "id": "exam-sec-1-1-q061",
    "examId": "exam-sec-1-1",
    "questionNumber": 61,
    "questionText": "\u00bfEn que consiste el proceso de secuencia y disposici\u00f3n de paneles?"
  },
  {
    "id": "exam-sec-1-1-q062",
    "examId": "exam-sec-1-1",
    "questionNumber": 62,
    "questionText": "Generalmente, se necesita cuando menos el _________ del \u00e1rea del piso para los camiones de concreto y para maniobrar la gr\u00faa durante el levantamiento"
  },
  {
    "id": "exam-sec-1-1-q063",
    "examId": "exam-sec-1-1",
    "questionNumber": 63,
    "questionText": "Es un factor que afecta el espacio de la losa de piso utilizable"
  },
  {
    "id": "exam-sec-1-1-q064",
    "examId": "exam-sec-1-1",
    "questionNumber": 64,
    "questionText": "Tipo de gr\u00faa usada para montar los paneles"
  },
  {
    "id": "exam-sec-1-1-q065",
    "examId": "exam-sec-1-1",
    "questionNumber": 65,
    "questionText": "\u00bfDe que depende si el panel se levanta desde el interior o exterior?"
  },
  {
    "id": "exam-sec-1-1-q066",
    "examId": "exam-sec-1-1",
    "questionNumber": 66,
    "questionText": "Es un requisito para seleccionar la gr\u00faa"
  },
  {
    "id": "exam-sec-1-1-q067",
    "examId": "exam-sec-1-1",
    "questionNumber": 67,
    "questionText": "Cuando se recogen paneles grandes, es poco com\u00fan emplear el uso de una gr\u00faa oruga."
  },
  {
    "id": "exam-sec-1-1-q068",
    "examId": "exam-sec-1-1",
    "questionNumber": 68,
    "questionText": "Debe estimarse que la gr\u00faa sea 2 a 3 veces el tama\u00f1o del panel m\u00e1s pesado"
  },
  {
    "id": "exam-sec-1-1-q069",
    "examId": "exam-sec-1-1",
    "questionNumber": 69,
    "questionText": "El _______ es un acabo que se usa con frecuencia"
  },
  {
    "id": "exam-sec-1-1-q070",
    "examId": "exam-sec-1-1",
    "questionNumber": 70,
    "questionText": "\u00bfQue requisitos determinan la resistencia de los paneles a incendios?"
  },
  {
    "id": "exam-sec-1-1-q071",
    "examId": "exam-sec-1-1",
    "questionNumber": 71,
    "questionText": "\u00bfA que se refiere el factor R?"
  },
  {
    "id": "exam-sec-1-1-q072",
    "examId": "exam-sec-1-1",
    "questionNumber": 72,
    "questionText": "\u00bfEn que se basa el espesor requerido del panel en cuanto a desempe\u00f1o termino?"
  },
  {
    "id": "exam-sec-1-1-q073",
    "examId": "exam-sec-1-1",
    "questionNumber": 73,
    "questionText": "Los edificios con un alto contenido de humedad o que tienen el potencial de mal uso no pueden ser buenos candidatos para sistemas aplicados en interiores."
  },
  {
    "id": "exam-sec-1-1-q074",
    "examId": "exam-sec-1-1",
    "questionNumber": 74,
    "questionText": "Los sistemas en interiores tambi\u00e9n a\u00edslan el concreto en el lado fr\u00edo del muro"
  },
  {
    "id": "exam-sec-1-1-q075",
    "examId": "exam-sec-1-1",
    "questionNumber": 75,
    "questionText": "Se posicionan contra la cara boca abajo son predominantemente EPS por naturaleza."
  },
  {
    "id": "exam-sec-1-1-q076",
    "examId": "exam-sec-1-1",
    "questionNumber": 76,
    "questionText": "\u00bfEn que consisten los paneles emparedados?"
  },
  {
    "id": "exam-sec-1-1-q077",
    "examId": "exam-sec-1-1",
    "questionNumber": 77,
    "questionText": "\u00bfCual es el aislamiento predilecto en paneles emparedados?"
  },
  {
    "id": "exam-sec-1-1-q078",
    "examId": "exam-sec-1-1",
    "questionNumber": 78,
    "questionText": "Usan conectores r\u00edgidos para crear un panel"
  },
  {
    "id": "exam-sec-1-1-q079",
    "examId": "exam-sec-1-1",
    "questionNumber": 79,
    "questionText": "La vibraci\u00f3n o presi\u00f3n sobre el tablero de aislamiento no asegura que el concreto fluya alrededor de cualquier deformaci\u00f3n o desplazamiento en el conector."
  },
  {
    "id": "exam-sec-1-5-q001",
    "examId": "exam-sec-1-5",
    "questionNumber": 1,
    "questionText": "\u00bfC\u00f3mo se define el m\u00e9todo de Tilt-Up?"
  },
  {
    "id": "exam-sec-1-5-q002",
    "examId": "exam-sec-1-5",
    "questionNumber": 2,
    "questionText": "\u00bfCu\u00e1l de las siguientes es una caracter\u00edstica de los paneles de Tilt-Up?"
  },
  {
    "id": "exam-sec-1-5-q003",
    "examId": "exam-sec-1-5",
    "questionNumber": 3,
    "questionText": "La____________ y__________ son ventajas del m\u00e9todo Tilt-Up."
  },
  {
    "id": "exam-sec-1-5-q004",
    "examId": "exam-sec-1-5",
    "questionNumber": 4,
    "questionText": "Supera cualquier otra opci\u00f3n que ofrecen mamposter\u00eda y madera"
  },
  {
    "id": "exam-sec-1-5-q005",
    "examId": "exam-sec-1-5",
    "questionNumber": 5,
    "questionText": "El mayor porcentaje del uso de este m\u00e9todo constructivo se encuentra en el sector industrial"
  },
  {
    "id": "exam-sec-1-5-q006",
    "examId": "exam-sec-1-5",
    "questionNumber": 6,
    "questionText": "\u00bfCual es el primer paso del proceso?"
  },
  {
    "id": "exam-sec-1-5-q007",
    "examId": "exam-sec-1-5",
    "questionNumber": 7,
    "questionText": "Se lleva a cabo despu\u00e9s de colocar los paneles de muros"
  },
  {
    "id": "exam-sec-1-5-q008",
    "examId": "exam-sec-1-5",
    "questionNumber": 8,
    "questionText": "\u00bfQue debo llevar acabo antes de retirar las riostras del muro?"
  },
  {
    "id": "exam-sec-1-5-q009",
    "examId": "exam-sec-1-5",
    "questionNumber": 9,
    "questionText": "\u00bfCu\u00e1l es el siguiente paso despu\u00e9s de limpiar las caras?"
  },
  {
    "id": "exam-sec-1-5-q010",
    "examId": "exam-sec-1-5",
    "questionNumber": 10,
    "questionText": "El ______ forma parte de los acabados para los paneles"
  },
  {
    "id": "exam-sec-1-5-q011",
    "examId": "exam-sec-1-5",
    "questionNumber": 11,
    "questionText": "\u00bfCuantas clasificaciones b\u00e1sicas hay de cemento Portland?"
  },
  {
    "id": "exam-sec-1-5-q012",
    "examId": "exam-sec-1-5",
    "questionNumber": 12,
    "questionText": "\u00bfEn que consiste el SCM que predomina en el concreto para tilt-up?"
  },
  {
    "id": "exam-sec-1-5-q013",
    "examId": "exam-sec-1-5",
    "questionNumber": 13,
    "questionText": "El agua utilizada para las mezclas de concreto tilt-up no necesita ser potable"
  },
  {
    "id": "exam-sec-1-5-q014",
    "examId": "exam-sec-1-5",
    "questionNumber": 14,
    "questionText": "La cantidad de aire atrapado en el concreto es mayor que el 2%"
  },
  {
    "id": "exam-sec-1-5-q015",
    "examId": "exam-sec-1-5",
    "questionNumber": 15,
    "questionText": "\u00bfCual es el porcentaje del volumen de concreto que conforman los agregados?"
  },
  {
    "id": "exam-sec-1-5-q016",
    "examId": "exam-sec-1-5",
    "questionNumber": 16,
    "questionText": "Permiten obtener la resistencia de 28 d\u00edas a los 7 d\u00edas"
  },
  {
    "id": "exam-sec-1-5-q017",
    "examId": "exam-sec-1-5",
    "questionNumber": 17,
    "questionText": "Permiten una reducci\u00f3n en la dosificaci\u00f3n del agua"
  },
  {
    "id": "exam-sec-1-5-q018",
    "examId": "exam-sec-1-5",
    "questionNumber": 18,
    "questionText": "Un beneficio de usar este aditivo es una menor segregaci\u00f3n"
  },
  {
    "id": "exam-sec-1-5-q019",
    "examId": "exam-sec-1-5",
    "questionNumber": 19,
    "questionText": "El beneficioso para reducir las presiones necesarias para el bombeo"
  },
  {
    "id": "exam-sec-1-5-q020",
    "examId": "exam-sec-1-5",
    "questionNumber": 20,
    "questionText": "El revenimiento debes estar en un rango de 100 a 125 mm"
  },
  {
    "id": "exam-sec-1-5-q021",
    "examId": "exam-sec-1-5",
    "questionNumber": 21,
    "questionText": "\u00bfCual es la resistencia m\u00ednima especifica del concreto para losa de piso a 28 d\u00edas?"
  },
  {
    "id": "exam-sec-1-5-q022",
    "examId": "exam-sec-1-5",
    "questionNumber": 22,
    "questionText": "\u00bfCual es la resistencia m\u00ednima para mezclas de cimentaci\u00f3n?"
  },
  {
    "id": "exam-sec-1-5-q023",
    "examId": "exam-sec-1-5",
    "questionNumber": 23,
    "questionText": "Tama\u00f1o m\u00e1ximo de agregado para la losa de piso"
  },
  {
    "id": "exam-sec-1-5-q024",
    "examId": "exam-sec-1-5",
    "questionNumber": 24,
    "questionText": "Tama\u00f1o m\u00e1ximo de agregado para los paneles es de 25 mm"
  },
  {
    "id": "exam-sec-1-5-q025",
    "examId": "exam-sec-1-5",
    "questionNumber": 25,
    "questionText": "Las fuerzas incurridas durante el proceso de levantamiento son a menudo m\u00e1s menores que las que se encuentran durante la ocupaci\u00f3n de la construcci\u00f3n"
  },
  {
    "id": "exam-sec-1-5-q026",
    "examId": "exam-sec-1-5",
    "questionNumber": 26,
    "questionText": "El refuerzo de acero se usa para soportar las fuerzas de flexi\u00f3n"
  },
  {
    "id": "exam-sec-1-5-q027",
    "examId": "exam-sec-1-5",
    "questionNumber": 27,
    "questionText": "\u00bfQue tama\u00f1o de barras de refuerzo no es com\u00fan en los paneles?"
  },
  {
    "id": "exam-sec-1-5-q028",
    "examId": "exam-sec-1-5",
    "questionNumber": 28,
    "questionText": "\u00bfCu\u00e1l es el \u00e1rea nominal de las varillas del numero 5?"
  },
  {
    "id": "exam-sec-1-5-q029",
    "examId": "exam-sec-1-5",
    "questionNumber": 29,
    "questionText": "La malla de refuerzo electrosoldado es un producto recomendado para uso en tilt-up"
  },
  {
    "id": "exam-sec-1-5-q030",
    "examId": "exam-sec-1-5",
    "questionNumber": 30,
    "questionText": "\u00bfQu\u00e9 peso deben soportar las silletas?"
  },
  {
    "id": "exam-sec-1-5-q031",
    "examId": "exam-sec-1-5",
    "questionNumber": 31,
    "questionText": "\u00bfCu\u00e1l es el material mas com\u00fan para moldear las losas?"
  },
  {
    "id": "exam-sec-1-5-q032",
    "examId": "exam-sec-1-5",
    "questionNumber": 32,
    "questionText": "\u00bfQue tipo de desmoldante forma jabones met\u00e1licos para la adhesi\u00f3n?"
  },
  {
    "id": "exam-sec-1-5-q033",
    "examId": "exam-sec-1-5",
    "questionNumber": 33,
    "questionText": "\u00bfCu\u00e1l es el m\u00e9todo de aplicaci\u00f3n del aislamiento?"
  },
  {
    "id": "exam-sec-1-5-q034",
    "examId": "exam-sec-1-5",
    "questionNumber": 34,
    "questionText": "Grosor est\u00e1ndar de ladrillos para acabado"
  },
  {
    "id": "exam-sec-1-5-q035",
    "examId": "exam-sec-1-5",
    "questionNumber": 35,
    "questionText": "Es un factor que afecta el curado del concreto"
  },
  {
    "id": "exam-sec-1-5-q036",
    "examId": "exam-sec-1-5",
    "questionNumber": 36,
    "questionText": "La _____ es especialmente importante en proyectos de tilt-up que tienen grandes superficies de losas sobre el terreno"
  },
  {
    "id": "exam-sec-1-5-q037",
    "examId": "exam-sec-1-5",
    "questionNumber": 37,
    "questionText": "El costal de arpilleria puede usarse cono recubrimiento para el curado"
  },
  {
    "id": "exam-sec-1-5-q038",
    "examId": "exam-sec-1-5",
    "questionNumber": 38,
    "questionText": "El recubrimiento se dejara en su lugar de 6 a 5 d\u00edas"
  },
  {
    "id": "exam-sec-1-5-q039",
    "examId": "exam-sec-1-5",
    "questionNumber": 39,
    "questionText": "El curado predominante para \u00e1reas grandes de  concreto es rociar la superficie con un compuesto liquido."
  },
  {
    "id": "exam-sec-1-5-q040",
    "examId": "exam-sec-1-5",
    "questionNumber": 40,
    "questionText": "\u00bfApartir de que temperatura deben tomarse medidas para reducir el agrietamiento en la losas?"
  },
  {
    "id": "exam-sec-1-5-q041",
    "examId": "exam-sec-1-5",
    "questionNumber": 41,
    "questionText": "Puede usarse una mezcla menos densa para acelerar la obtenci\u00f3n de resistencia en tiempo frio"
  },
  {
    "id": "exam-sec-1-5-q042",
    "examId": "exam-sec-1-5",
    "questionNumber": 42,
    "questionText": "El aditivo incorporador de aire no se a\u00f1ade durante la mezcla de concreto"
  },
  {
    "id": "exam-sec-1-5-q043",
    "examId": "exam-sec-1-5",
    "questionNumber": 43,
    "questionText": "Las emisiones de bi\u00f3xido de carbono en espacios cerrados afectan el curado del concreto durante las primeras 24 horas"
  },
  {
    "id": "exam-sec-1-5-q044",
    "examId": "exam-sec-1-5",
    "questionNumber": 44,
    "questionText": "Para que el calor de los paneles apilados sea de ayuda en clima frio el tiempo de vaciado de pisos sucesivos no debe superar______"
  },
  {
    "id": "exam-sec-1-5-q045",
    "examId": "exam-sec-1-5",
    "questionNumber": 45,
    "questionText": "\u00bfCual es la temperatura m\u00ednima a la que se recomienda colar?"
  },
  {
    "id": "exam-sec-1-5-q046",
    "examId": "exam-sec-1-5",
    "questionNumber": 46,
    "questionText": "Dejar cualquier molde en su lugar el mayor tiempo posible ayuda a distribuir el calor sobre superficie del concreto"
  },
  {
    "id": "exam-sec-1-5-q047",
    "examId": "exam-sec-1-5",
    "questionNumber": 47,
    "questionText": "Es un aspecto de dise\u00f1o"
  },
  {
    "id": "exam-sec-1-5-q048",
    "examId": "exam-sec-1-5",
    "questionNumber": 48,
    "questionText": "Debe analizarse durante la etapa de preconstrucci\u00f3n"
  },
  {
    "id": "exam-sec-1-5-q049",
    "examId": "exam-sec-1-5",
    "questionNumber": 49,
    "questionText": "Documento que incluye la ubicaci\u00f3n de los insertos"
  },
  {
    "id": "exam-sec-1-5-q050",
    "examId": "exam-sec-1-5",
    "questionNumber": 50,
    "questionText": "Documento que incluye las dimensiones del panel"
  },
  {
    "id": "exam-sec-1-5-q051",
    "examId": "exam-sec-1-5",
    "questionNumber": 51,
    "questionText": "El espesor del panel y su refuerzo de acero proporcionan una resistencia a las siguientes fuerzas"
  },
  {
    "id": "exam-sec-1-5-q052",
    "examId": "exam-sec-1-5",
    "questionNumber": 52,
    "questionText": "Es la altura sin soporte"
  },
  {
    "id": "exam-sec-1-5-q053",
    "examId": "exam-sec-1-5",
    "questionNumber": 53,
    "questionText": "Las moldaduras no reducen el espesor estructural"
  },
  {
    "id": "exam-sec-1-5-q054",
    "examId": "exam-sec-1-5",
    "questionNumber": 54,
    "questionText": "\u00bfQue significa modular el edificio?"
  },
  {
    "id": "exam-sec-1-5-q055",
    "examId": "exam-sec-1-5",
    "questionNumber": 55,
    "questionText": "\u00bfCual es la longitud que debe evitarse en paneles de dintel?"
  },
  {
    "id": "exam-sec-1-5-q056",
    "examId": "exam-sec-1-5",
    "questionNumber": 56,
    "questionText": "\u00bfCual es la longitud minia que debe tener un panel solido entre aberturas o abertura y borde de un panel?"
  },
  {
    "id": "exam-sec-1-5-q057",
    "examId": "exam-sec-1-5",
    "questionNumber": 57,
    "questionText": "Es un factor que influye en el tama\u00f1o de un panel"
  },
  {
    "id": "exam-sec-1-5-q058",
    "examId": "exam-sec-1-5",
    "questionNumber": 58,
    "questionText": "El tama\u00f1o de un panel afecta el tiempo de levantamiento"
  },
  {
    "id": "exam-sec-1-5-q059",
    "examId": "exam-sec-1-5",
    "questionNumber": 59,
    "questionText": "\u00bfQue determina un panel fuera de plano?"
  },
  {
    "id": "exam-sec-1-5-q060",
    "examId": "exam-sec-1-5",
    "questionNumber": 60,
    "questionText": "Los paneles curvos son mas costos"
  },
  {
    "id": "exam-sec-1-5-q061",
    "examId": "exam-sec-1-5",
    "questionNumber": 61,
    "questionText": "\u00bfEn que consiste el proceso de secuencia y disposici\u00f3n de paneles?"
  },
  {
    "id": "exam-sec-1-5-q062",
    "examId": "exam-sec-1-5",
    "questionNumber": 62,
    "questionText": "Generalmente, se necesita cuando menos el _________ del \u00e1rea del piso para los camiones de concreto y para maniobrar la gr\u00faa durante el levantamiento"
  },
  {
    "id": "exam-sec-1-5-q063",
    "examId": "exam-sec-1-5",
    "questionNumber": 63,
    "questionText": "Es un factor que afecta el espacio de la losa de piso utilizable"
  },
  {
    "id": "exam-sec-1-5-q064",
    "examId": "exam-sec-1-5",
    "questionNumber": 64,
    "questionText": "Tipo de gr\u00faa usada para montar los paneles"
  },
  {
    "id": "exam-sec-1-5-q065",
    "examId": "exam-sec-1-5",
    "questionNumber": 65,
    "questionText": "\u00bfDe que depende si el panel se levanta desde el interior o exterior?"
  },
  {
    "id": "exam-sec-1-5-q066",
    "examId": "exam-sec-1-5",
    "questionNumber": 66,
    "questionText": "Es un requisito para seleccionar la gr\u00faa"
  },
  {
    "id": "exam-sec-1-5-q067",
    "examId": "exam-sec-1-5",
    "questionNumber": 67,
    "questionText": "Cuando se recogen paneles grandes, es poco com\u00fan emplear el uso de una gr\u00faa oruga."
  },
  {
    "id": "exam-sec-1-5-q068",
    "examId": "exam-sec-1-5",
    "questionNumber": 68,
    "questionText": "Debe estimarse que la gr\u00faa sea 2 a 3 veces el tama\u00f1o del panel m\u00e1s pesado"
  },
  {
    "id": "exam-sec-1-5-q069",
    "examId": "exam-sec-1-5",
    "questionNumber": 69,
    "questionText": "El _______ es un acabo que se usa con frecuencia"
  },
  {
    "id": "exam-sec-1-5-q070",
    "examId": "exam-sec-1-5",
    "questionNumber": 70,
    "questionText": "\u00bfQue requisitos determinan la resistencia de los paneles a incendios?"
  },
  {
    "id": "exam-sec-1-5-q071",
    "examId": "exam-sec-1-5",
    "questionNumber": 71,
    "questionText": "\u00bfA que se refiere el factor R?"
  },
  {
    "id": "exam-sec-1-5-q072",
    "examId": "exam-sec-1-5",
    "questionNumber": 72,
    "questionText": "\u00bfEn que se basa el espesor requerido del panel en cuanto a desempe\u00f1o termino?"
  },
  {
    "id": "exam-sec-1-5-q073",
    "examId": "exam-sec-1-5",
    "questionNumber": 73,
    "questionText": "Los edificios con un alto contenido de humedad o que tienen el potencial de mal uso no pueden ser buenos candidatos para sistemas aplicados en interiores."
  },
  {
    "id": "exam-sec-1-5-q074",
    "examId": "exam-sec-1-5",
    "questionNumber": 74,
    "questionText": "Los sistemas en interiores tambi\u00e9n a\u00edslan el concreto en el lado fr\u00edo del muro"
  },
  {
    "id": "exam-sec-1-5-q075",
    "examId": "exam-sec-1-5",
    "questionNumber": 75,
    "questionText": "Se posicionan contra la cara boca abajo son predominantemente EPS por naturaleza."
  },
  {
    "id": "exam-sec-1-5-q076",
    "examId": "exam-sec-1-5",
    "questionNumber": 76,
    "questionText": "\u00bfEn que consisten los paneles emparedados?"
  },
  {
    "id": "exam-sec-1-5-q077",
    "examId": "exam-sec-1-5",
    "questionNumber": 77,
    "questionText": "\u00bfCual es el aislamiento predilecto en paneles emparedados?"
  },
  {
    "id": "exam-sec-1-5-q078",
    "examId": "exam-sec-1-5",
    "questionNumber": 78,
    "questionText": "Usan conectores r\u00edgidos para crear un panel"
  },
  {
    "id": "exam-sec-1-5-q079",
    "examId": "exam-sec-1-5",
    "questionNumber": 79,
    "questionText": "La vibraci\u00f3n o presi\u00f3n sobre el tablero de aislamiento no asegura que el concreto fluya alrededor de cualquier deformaci\u00f3n o desplazamiento en el conector."
  },
  {
    "id": "exam-sec-2-1-q001",
    "examId": "exam-sec-2-1",
    "questionNumber": 1,
    "questionText": "Funciona como la superficie del suelo para la vida del edificio"
  },
  {
    "id": "exam-sec-2-1-q002",
    "examId": "exam-sec-2-1",
    "questionNumber": 2,
    "questionText": "Es un materiales granular colocado directamente debajo de la losa"
  },
  {
    "id": "exam-sec-2-1-q003",
    "examId": "exam-sec-2-1",
    "questionNumber": 3,
    "questionText": "Factor critico para determinar el espesor m\u00ednimo de la losa de piso"
  },
  {
    "id": "exam-sec-2-1-q004",
    "examId": "exam-sec-2-1",
    "questionNumber": 4,
    "questionText": "El refuerzo es un factor que influye en el dise\u00f1o de la losa"
  },
  {
    "id": "exam-sec-2-1-q005",
    "examId": "exam-sec-2-1",
    "questionNumber": 5,
    "questionText": "Una losa de 125 mm es satisfactoria para la mayor\u00eda de las cargas de construcci\u00f3n aplicadas durante el proceso de tilt-up"
  },
  {
    "id": "exam-sec-2-1-q006",
    "examId": "exam-sec-2-1",
    "questionNumber": 6,
    "questionText": "\u00c1reas localizadas de la losa donde el espesor puede aumentar"
  },
  {
    "id": "exam-sec-2-1-q007",
    "examId": "exam-sec-2-1",
    "questionNumber": 7,
    "questionText": "Es una carga de construcci\u00f3n temporal"
  },
  {
    "id": "exam-sec-2-1-q008",
    "examId": "exam-sec-2-1",
    "questionNumber": 8,
    "questionText": "Las cargas impuestas por _____________ son mucho m\u00e1s pesadas que la mayor\u00eda de las otras cargas de construcci\u00f3n"
  },
  {
    "id": "exam-sec-2-1-q009",
    "examId": "exam-sec-2-1",
    "questionNumber": 9,
    "questionText": "Lo losa puede soportar fuerzas de punzonado debido al __________"
  },
  {
    "id": "exam-sec-2-1-q010",
    "examId": "exam-sec-2-1",
    "questionNumber": 10,
    "questionText": "Profundidad preferente para colocar refuerzo de acero en la losa"
  },
  {
    "id": "exam-sec-2-1-q011",
    "examId": "exam-sec-2-1",
    "questionNumber": 11,
    "questionText": "\u00bfCual es la desventaja de usar una alta cantidad de acero de refuerzo?"
  },
  {
    "id": "exam-sec-2-1-q012",
    "examId": "exam-sec-2-1",
    "questionNumber": 12,
    "questionText": "\u00bfEn que consiste la teor\u00eda de la subrasante?"
  },
  {
    "id": "exam-sec-2-1-q013",
    "examId": "exam-sec-2-1",
    "questionNumber": 13,
    "questionText": "El espaciado entre juntas para una losa de espesor 127 mm es de 8.8 m"
  },
  {
    "id": "exam-sec-2-1-q014",
    "examId": "exam-sec-2-1",
    "questionNumber": 14,
    "questionText": "La fibra como refuerzo ha demostrado ser efectiva para aumentar la resistencia a la flexi\u00f3n"
  },
  {
    "id": "exam-sec-2-1-q015",
    "examId": "exam-sec-2-1",
    "questionNumber": 15,
    "questionText": "El refuerzo es efectivo para:"
  },
  {
    "id": "exam-sec-2-1-q016",
    "examId": "exam-sec-2-1",
    "questionNumber": 16,
    "questionText": "Es un desaf\u00edo en el dise\u00f1o de losas de piso"
  },
  {
    "id": "exam-sec-2-1-q017",
    "examId": "exam-sec-2-1",
    "questionNumber": 17,
    "questionText": "Es una junta de construcci\u00f3n"
  },
  {
    "id": "exam-sec-2-1-q018",
    "examId": "exam-sec-2-1",
    "questionNumber": 18,
    "questionText": "Este tipo de junta requiere espigas"
  },
  {
    "id": "exam-sec-2-1-q019",
    "examId": "exam-sec-2-1",
    "questionNumber": 19,
    "questionText": "Se utilizan con mayor frecuencia en cimentaciones"
  },
  {
    "id": "exam-sec-2-1-q020",
    "examId": "exam-sec-2-1",
    "questionNumber": 20,
    "questionText": "Las juntas aserradas deben hacerse lo m\u00e1s pronto posible despu\u00e9s de la colocaci\u00f3n"
  },
  {
    "id": "exam-sec-2-1-q021",
    "examId": "exam-sec-2-1",
    "questionNumber": 21,
    "questionText": "Act\u00faan de manera similar a las juntas aserradas"
  },
  {
    "id": "exam-sec-2-1-q022",
    "examId": "exam-sec-2-1",
    "questionNumber": 22,
    "questionText": "El uso de __________ permite tener \u00e1reas de losa grandes entre las juntas de construcci\u00f3n"
  },
  {
    "id": "exam-sec-2-1-q023",
    "examId": "exam-sec-2-1",
    "questionNumber": 23,
    "questionText": "\u00bfDonde deben colocarse las juntas de control?"
  },
  {
    "id": "exam-sec-2-1-q024",
    "examId": "exam-sec-2-1",
    "questionNumber": 24,
    "questionText": "Las espigas tambi\u00e9n se recomienda para juntas en \u00e1reas de recorrido de la gr\u00faa"
  },
  {
    "id": "exam-sec-2-1-q025",
    "examId": "exam-sec-2-1",
    "questionNumber": 25,
    "questionText": "Es muy importante que las espigas en juntas sean anguladas de lo contrario restringir\u00e1n el movimiento"
  },
  {
    "id": "exam-sec-2-1-q026",
    "examId": "exam-sec-2-1",
    "questionNumber": 26,
    "questionText": "La capa de base act\u00faa como una rotura capital para impedir que la humedad se eleve y da\u00f1e el recubrimiento de un piso"
  },
  {
    "id": "exam-sec-2-1-q027",
    "examId": "exam-sec-2-1",
    "questionNumber": 27,
    "questionText": "\u00bfQue equipo se utiliza para garantizar el acabado de la losa de piso?"
  },
  {
    "id": "exam-sec-2-1-q028",
    "examId": "exam-sec-2-1",
    "questionNumber": 28,
    "questionText": "\u00bfC\u00f3mo se llama el sistema para medir la planicidad de las losas?"
  },
  {
    "id": "exam-sec-2-1-q029",
    "examId": "exam-sec-2-1",
    "questionNumber": 29,
    "questionText": "La resistencia recomendada para el concreto de camas de colado es de 22 MPa"
  },
  {
    "id": "exam-sec-2-1-q030",
    "examId": "exam-sec-2-1",
    "questionNumber": 30,
    "questionText": "Para una cama de arena, este material se dispersa a ______ profundidad del di\u00e1metro de la piedra"
  },
  {
    "id": "exam-sec-2-1-q031",
    "examId": "exam-sec-2-1",
    "questionNumber": 31,
    "questionText": "Es una forma de cepillar la \u00e1rea de los paneles colados sobre camas de arena"
  },
  {
    "id": "exam-sec-2-1-q032",
    "examId": "exam-sec-2-1",
    "questionNumber": 32,
    "questionText": "\u00bfA que altura debe sostenerse la platea de una cimentaci\u00f3n interior?"
  },
  {
    "id": "exam-sec-2-1-q033",
    "examId": "exam-sec-2-1",
    "questionNumber": 33,
    "questionText": "\u00bfEn que momento se retirar los moldes de las plateas?"
  },
  {
    "id": "exam-sec-2-1-q034",
    "examId": "exam-sec-2-1",
    "questionNumber": 34,
    "questionText": "\u00bfEn donde se usan las zaptas continuas?"
  },
  {
    "id": "exam-sec-2-1-q035",
    "examId": "exam-sec-2-1",
    "questionNumber": 35,
    "questionText": "\u00bfCual es la relaci\u00f3n entre la anchura de la zapata continua y la capacidad del suelo?"
  },
  {
    "id": "exam-sec-2-1-q036",
    "examId": "exam-sec-2-1",
    "questionNumber": 36,
    "questionText": "\u00bfA que altura se retrae la losa de piso para permitir que el panel se erija en la zapata?"
  },
  {
    "id": "exam-sec-2-1-q037",
    "examId": "exam-sec-2-1",
    "questionNumber": 37,
    "questionText": "Las zapatas cargadas exc\u00e9ntricamente son mas profundas"
  },
  {
    "id": "exam-sec-2-1-q038",
    "examId": "exam-sec-2-1",
    "questionNumber": 38,
    "questionText": "Las vigas de nivel especifican un refuerzo m\u00e1s ligero en la parte superior e inferior de la viga"
  },
  {
    "id": "exam-sec-2-1-q039",
    "examId": "exam-sec-2-1",
    "questionNumber": 39,
    "questionText": "\u00bfEn donde se ubican las zapatas aisladas?"
  },
  {
    "id": "exam-sec-2-1-q040",
    "examId": "exam-sec-2-1",
    "questionNumber": 40,
    "questionText": "La cimentaci\u00f3n de muro se construye de la parte superior de la zapata en lugar del panel"
  },
  {
    "id": "exam-sec-2-1-q041",
    "examId": "exam-sec-2-1",
    "questionNumber": 41,
    "questionText": "Las losas de piso soportadas sobre pilas son adecuadas para soportar grandes cargas de construcci\u00f3n."
  },
  {
    "id": "exam-sec-2-1-q042",
    "examId": "exam-sec-2-1",
    "questionNumber": 42,
    "questionText": "Si el pilar perforado tiene el di\u00e1metro suficiente el sistema es semejante a los de las pilas cuando se usan vigas de nivel o tapas"
  },
  {
    "id": "exam-sec-2-1-q043",
    "examId": "exam-sec-2-1",
    "questionNumber": 43,
    "questionText": "Los muros independientes se construyen colocando el panel en almohadillas temporales a cada extremo y despu\u00e9s colocando concreto debajo y alrededor de la parte inferior del panel"
  },
  {
    "id": "exam-sec-2-1-q044",
    "examId": "exam-sec-2-1",
    "questionNumber": 44,
    "questionText": "\u00bfCual es la longitud general  de las almohadillas de montaje de lechada?"
  },
  {
    "id": "exam-sec-2-1-q045",
    "examId": "exam-sec-2-1",
    "questionNumber": 45,
    "questionText": "Las almohadillas de soporte pl\u00e1stico son usadas de manera"
  },
  {
    "id": "exam-sec-2-1-q046",
    "examId": "exam-sec-2-1",
    "questionNumber": 46,
    "questionText": "\u00bfQue material es usado para los moldes de los paneles?"
  },
  {
    "id": "exam-sec-2-1-q047",
    "examId": "exam-sec-2-1",
    "questionNumber": 47,
    "questionText": "\u00bfCu\u00e1l es el espaciado recomendado para abrazaderas y soportes de los moldes de paneles?"
  },
  {
    "id": "exam-sec-2-1-q048",
    "examId": "exam-sec-2-1",
    "questionNumber": 48,
    "questionText": "\u00bfCon que material se sellan los chaflanes?"
  },
  {
    "id": "exam-sec-2-1-q049",
    "examId": "exam-sec-2-1",
    "questionNumber": 49,
    "questionText": "Es un sistema eficaz para dar textura a la superficie de un panel"
  },
  {
    "id": "exam-sec-2-1-q050",
    "examId": "exam-sec-2-1",
    "questionNumber": 50,
    "questionText": "Es una muesca moldeada en la cara del concreto hecha al aplicar materiales a la superficie de colado"
  },
  {
    "id": "exam-sec-2-1-q051",
    "examId": "exam-sec-2-1",
    "questionNumber": 51,
    "questionText": "Reducen la profundidad estructural efectiva del concreto."
  },
  {
    "id": "exam-sec-2-1-q052",
    "examId": "exam-sec-2-1",
    "questionNumber": 52,
    "questionText": "Las esquinas ingleteadas deben sellarse en los cuatro lados con dos capas de sellador de poliuretano para minimizar el ensanchamiento"
  },
  {
    "id": "exam-sec-2-1-q053",
    "examId": "exam-sec-2-1",
    "questionNumber": 53,
    "questionText": "El mayor n\u00famero de abrazaderas es m\u00e1s eficaz para soportar los moldes"
  },
  {
    "id": "exam-sec-2-1-q054",
    "examId": "exam-sec-2-1",
    "questionNumber": 54,
    "questionText": "Se vuelven parte integral del panel cuando se coloca el concreto, llenando las regiones met\u00e1licas huecas."
  },
  {
    "id": "exam-sec-2-1-q055",
    "examId": "exam-sec-2-1",
    "questionNumber": 55,
    "questionText": "\u00bfCuales son los motivos mas comunes para las cavidades en las caras de los paneles?"
  },
  {
    "id": "exam-sec-2-1-q056",
    "examId": "exam-sec-2-1",
    "questionNumber": 56,
    "questionText": "\u00bfQue es una pilastra?"
  },
  {
    "id": "exam-sec-2-1-q057",
    "examId": "exam-sec-2-1",
    "questionNumber": 57,
    "questionText": "\u00bfCon que fin se colocan ladrillos en la superficie de los paneles?"
  },
  {
    "id": "exam-sec-2-1-q058",
    "examId": "exam-sec-2-1",
    "questionNumber": 58,
    "questionText": "La textura de hoyuelos depende del grosor de la hoja de polietileno"
  },
  {
    "id": "exam-sec-2-1-q059",
    "examId": "exam-sec-2-1",
    "questionNumber": 59,
    "questionText": "\u00bfQue tama\u00f1o promedio de agregado se usa para realizar la textura de hoyuelos?"
  },
  {
    "id": "exam-sec-2-1-q060",
    "examId": "exam-sec-2-1",
    "questionNumber": 60,
    "questionText": "Hay muchas maneras de reducir los efectos del reflejo exacto de las juntas en los paneles."
  },
  {
    "id": "exam-sec-2-1-q061",
    "examId": "exam-sec-2-1",
    "questionNumber": 61,
    "questionText": "\u00bfC\u00f3mo se pueden corregir o enderezar  los arcos peque\u00f1os de la medara de moldaje?"
  },
  {
    "id": "exam-sec-2-1-q062",
    "examId": "exam-sec-2-1",
    "questionNumber": 62,
    "questionText": "\u00bfCon que se separan los moldes?"
  },
  {
    "id": "exam-sec-2-1-q063",
    "examId": "exam-sec-2-1",
    "questionNumber": 63,
    "questionText": "\u00bfQue puede sustituir el sistema de moldaje de franjas?"
  },
  {
    "id": "exam-sec-2-1-q064",
    "examId": "exam-sec-2-1",
    "questionNumber": 64,
    "questionText": "\u00bfEn que tipo de situaciones es preferente implementar moldaje hermanado?"
  },
  {
    "id": "exam-sec-2-1-q065",
    "examId": "exam-sec-2-1",
    "questionNumber": 65,
    "questionText": "\u00bfEn que consisten los paneles de formas irregulares?"
  },
  {
    "id": "exam-sec-2-1-q066",
    "examId": "exam-sec-2-1",
    "questionNumber": 66,
    "questionText": "\u00bfEn que paneles se usan los moldaje de masonita?"
  },
  {
    "id": "exam-sec-2-1-q067",
    "examId": "exam-sec-2-1",
    "questionNumber": 67,
    "questionText": "El panel emparedado esta dise\u00f1ado para ser del mismo grosor que uno normal"
  },
  {
    "id": "exam-sec-2-1-q068",
    "examId": "exam-sec-2-1",
    "questionNumber": 68,
    "questionText": "Moldaje de colado apilado es un sistema de moldes para a\u00f1adir otro(s) nivel(es) de moldes arriba del conjunto anterior."
  },
  {
    "id": "exam-sec-2-1-q069",
    "examId": "exam-sec-2-1",
    "questionNumber": 69,
    "questionText": "Implica pre perforar orificios en la losa de colado donde las anclas se instalar\u00e1n a trav\u00e9s de los productos de moldaje."
  },
  {
    "id": "exam-sec-2-1-q070",
    "examId": "exam-sec-2-1",
    "questionNumber": 70,
    "questionText": "\u00bfCu\u00e1l es la forma mas com\u00fan de sujeci\u00f3n mec\u00e1nica?"
  },
  {
    "id": "exam-sec-2-1-q071",
    "examId": "exam-sec-2-1",
    "questionNumber": 71,
    "questionText": "Factor que interfieren con el uso de adhesivos para sistemas adhesivos de sujeci\u00f3n"
  },
  {
    "id": "exam-sec-2-1-q072",
    "examId": "exam-sec-2-1",
    "questionNumber": 72,
    "questionText": "Compuesto usado para sellar los moldes"
  },
  {
    "id": "exam-sec-2-1-q073",
    "examId": "exam-sec-2-1",
    "questionNumber": 73,
    "questionText": "Antes de la inserci\u00f3n de cualquier refuerzo de acero, empotrados o insertos, se debe rociar desmoldante en la superficie de la losa."
  },
  {
    "id": "exam-sec-2-1-q074",
    "examId": "exam-sec-2-1",
    "questionNumber": 74,
    "questionText": "Las capas de desmoldante se roc\u00edan en \u00e1ngulos rectos"
  },
  {
    "id": "exam-sec-2-1-q075",
    "examId": "exam-sec-2-1",
    "questionNumber": 75,
    "questionText": "\u00bfCu\u00e1l es un efecto de aplicar el desmoldante incorrectamente?"
  },
  {
    "id": "exam-sec-2-1-q076",
    "examId": "exam-sec-2-1",
    "questionNumber": 76,
    "questionText": "El lavado ______ es el m\u00e9todo preferente para eliminar residuos de los paneles"
  },
  {
    "id": "exam-sec-2-1-q077",
    "examId": "exam-sec-2-1",
    "questionNumber": 77,
    "questionText": "Es la norma recomendada para consultar el refuerzo de paneles"
  },
  {
    "id": "exam-sec-2-1-q078",
    "examId": "exam-sec-2-1",
    "questionNumber": 78,
    "questionText": "\u00bfPorque son importantes los soportes para el refuerzo?"
  },
  {
    "id": "exam-sec-2-1-q079",
    "examId": "exam-sec-2-1",
    "questionNumber": 79,
    "questionText": "La tolerancia para el lugar de la barra dentro del espesor del panel y la cubierta sobre el refuerzo es de 20 mm"
  },
  {
    "id": "exam-sec-2-1-q080",
    "examId": "exam-sec-2-1",
    "questionNumber": 80,
    "questionText": "Se necesitan al menos dos barras No. 5 que se extienden 800 mm m\u00e1s all\u00e1 de la abertura del panel"
  },
  {
    "id": "exam-sec-2-1-q081",
    "examId": "exam-sec-2-1",
    "questionNumber": 81,
    "questionText": "Las cantidades normales de oxidaci\u00f3n ligera en el refuerzo de acero no son perjudiciales para su uso"
  },
  {
    "id": "exam-sec-2-1-q082",
    "examId": "exam-sec-2-1",
    "questionNumber": 82,
    "questionText": "Se recomienda evitar el refuerzo al aplicar o reaplicar desmoldante"
  },
  {
    "id": "exam-sec-2-1-q083",
    "examId": "exam-sec-2-1",
    "questionNumber": 83,
    "questionText": "Los ___________ requieren para levantar y montar los paneles desde su posici\u00f3n colada hasta su posici\u00f3n en el lugar final"
  },
  {
    "id": "exam-sec-2-1-q084",
    "examId": "exam-sec-2-1",
    "questionNumber": 84,
    "questionText": "\u00bfEn que etapa se colocan los insertos?"
  },
  {
    "id": "exam-sec-2-1-q085",
    "examId": "exam-sec-2-1",
    "questionNumber": 85,
    "questionText": "\u00bfA que profundidad se colocan los insertos de levantamiento?"
  },
  {
    "id": "exam-sec-2-1-q086",
    "examId": "exam-sec-2-1",
    "questionNumber": 86,
    "questionText": "\u00bfCuales son los dos tipos de insertos?"
  },
  {
    "id": "exam-sec-2-1-q087",
    "examId": "exam-sec-2-1",
    "questionNumber": 87,
    "questionText": "\u00bfCu\u00e1l es la tolerancia para colocar los insertos de arriostramiento dentro del lugar especificado?"
  },
  {
    "id": "exam-sec-2-1-q088",
    "examId": "exam-sec-2-1",
    "questionNumber": 88,
    "questionText": "\u00bfA que tipo de cargas est\u00e1n sometidas las riostras?"
  },
  {
    "id": "exam-sec-2-1-q089",
    "examId": "exam-sec-2-1",
    "questionNumber": 89,
    "questionText": "Es ejemplo de una pieza empotrada estructural"
  },
  {
    "id": "exam-sec-2-1-q090",
    "examId": "exam-sec-2-1",
    "questionNumber": 90,
    "questionText": "Las placas empotradas galvanizadas no deben usarse en ambientes corrosivos si deber\u00e1n quedar expuestas"
  },
  {
    "id": "exam-sec-2-1-q091",
    "examId": "exam-sec-2-1",
    "questionNumber": 91,
    "questionText": "Todos los empotramientos deben estar en el sitio de la obra antes de colar los paneles."
  },
  {
    "id": "exam-sec-2-1-q092",
    "examId": "exam-sec-2-1",
    "questionNumber": 92,
    "questionText": "Las barras de cuerda se cuelan en el panel de forma vertical"
  },
  {
    "id": "exam-sec-2-5-q001",
    "examId": "exam-sec-2-5",
    "questionNumber": 1,
    "questionText": "Funciona como la superficie del suelo para la vida del edificio"
  },
  {
    "id": "exam-sec-2-5-q002",
    "examId": "exam-sec-2-5",
    "questionNumber": 2,
    "questionText": "Es un materiales granular colocado directamente debajo de la losa"
  },
  {
    "id": "exam-sec-2-5-q003",
    "examId": "exam-sec-2-5",
    "questionNumber": 3,
    "questionText": "Factor critico para determinar el espesor m\u00ednimo de la losa de piso"
  },
  {
    "id": "exam-sec-2-5-q004",
    "examId": "exam-sec-2-5",
    "questionNumber": 4,
    "questionText": "El refuerzo es un factor que influye en el dise\u00f1o de la losa"
  },
  {
    "id": "exam-sec-2-5-q005",
    "examId": "exam-sec-2-5",
    "questionNumber": 5,
    "questionText": "Una losa de 125 mm es satisfactoria para la mayor\u00eda de las cargas de construcci\u00f3n aplicadas durante el proceso de tilt-up"
  },
  {
    "id": "exam-sec-2-5-q006",
    "examId": "exam-sec-2-5",
    "questionNumber": 6,
    "questionText": "\u00c1reas localizadas de la losa donde el espesor puede aumentar"
  },
  {
    "id": "exam-sec-2-5-q007",
    "examId": "exam-sec-2-5",
    "questionNumber": 7,
    "questionText": "Es una carga de construcci\u00f3n temporal"
  },
  {
    "id": "exam-sec-2-5-q008",
    "examId": "exam-sec-2-5",
    "questionNumber": 8,
    "questionText": "Las cargas impuestas por _____________ son mucho m\u00e1s pesadas que la mayor\u00eda de las otras cargas de construcci\u00f3n"
  },
  {
    "id": "exam-sec-2-5-q009",
    "examId": "exam-sec-2-5",
    "questionNumber": 9,
    "questionText": "Lo losa puede soportar fuerzas de punzonado debido al __________"
  },
  {
    "id": "exam-sec-2-5-q010",
    "examId": "exam-sec-2-5",
    "questionNumber": 10,
    "questionText": "Profundidad preferente para colocar refuerzo de acero en la losa"
  },
  {
    "id": "exam-sec-2-5-q011",
    "examId": "exam-sec-2-5",
    "questionNumber": 11,
    "questionText": "\u00bfCual es la desventaja de usar una alta cantidad de acero de refuerzo?"
  },
  {
    "id": "exam-sec-2-5-q012",
    "examId": "exam-sec-2-5",
    "questionNumber": 12,
    "questionText": "\u00bfEn que consiste la teor\u00eda de la subrasante?"
  },
  {
    "id": "exam-sec-2-5-q013",
    "examId": "exam-sec-2-5",
    "questionNumber": 13,
    "questionText": "El espaciado entre juntas para una losa de espesor 127 mm es de 8.8 m"
  },
  {
    "id": "exam-sec-2-5-q014",
    "examId": "exam-sec-2-5",
    "questionNumber": 14,
    "questionText": "La fibra como refuerzo ha demostrado ser efectiva para aumentar la resistencia a la flexi\u00f3n"
  },
  {
    "id": "exam-sec-2-5-q015",
    "examId": "exam-sec-2-5",
    "questionNumber": 15,
    "questionText": "El refuerzo es efectivo para:"
  },
  {
    "id": "exam-sec-2-5-q016",
    "examId": "exam-sec-2-5",
    "questionNumber": 16,
    "questionText": "Es un desaf\u00edo en el dise\u00f1o de losas de piso"
  },
  {
    "id": "exam-sec-2-5-q017",
    "examId": "exam-sec-2-5",
    "questionNumber": 17,
    "questionText": "Es una junta de construcci\u00f3n"
  },
  {
    "id": "exam-sec-2-5-q018",
    "examId": "exam-sec-2-5",
    "questionNumber": 18,
    "questionText": "Este tipo de junta requiere espigas"
  },
  {
    "id": "exam-sec-2-5-q019",
    "examId": "exam-sec-2-5",
    "questionNumber": 19,
    "questionText": "Se utilizan con mayor frecuencia en cimentaciones"
  },
  {
    "id": "exam-sec-2-5-q020",
    "examId": "exam-sec-2-5",
    "questionNumber": 20,
    "questionText": "Las juntas aserradas deben hacerse lo m\u00e1s pronto posible despu\u00e9s de la colocaci\u00f3n"
  },
  {
    "id": "exam-sec-2-5-q021",
    "examId": "exam-sec-2-5",
    "questionNumber": 21,
    "questionText": "Act\u00faan de manera similar a las juntas aserradas"
  },
  {
    "id": "exam-sec-2-5-q022",
    "examId": "exam-sec-2-5",
    "questionNumber": 22,
    "questionText": "El uso de __________ permite tener \u00e1reas de losa grandes entre las juntas de construcci\u00f3n"
  },
  {
    "id": "exam-sec-2-5-q023",
    "examId": "exam-sec-2-5",
    "questionNumber": 23,
    "questionText": "\u00bfDonde deben colocarse las juntas de control?"
  },
  {
    "id": "exam-sec-2-5-q024",
    "examId": "exam-sec-2-5",
    "questionNumber": 24,
    "questionText": "Las espigas tambi\u00e9n se recomienda para juntas en \u00e1reas de recorrido de la gr\u00faa"
  },
  {
    "id": "exam-sec-2-5-q025",
    "examId": "exam-sec-2-5",
    "questionNumber": 25,
    "questionText": "Es muy importante que las espigas en juntas sean anguladas de lo contrario restringir\u00e1n el movimiento"
  },
  {
    "id": "exam-sec-2-5-q026",
    "examId": "exam-sec-2-5",
    "questionNumber": 26,
    "questionText": "La capa de base act\u00faa como una rotura capital para impedir que la humedad se eleve y da\u00f1e el recubrimiento de un piso"
  },
  {
    "id": "exam-sec-2-5-q027",
    "examId": "exam-sec-2-5",
    "questionNumber": 27,
    "questionText": "\u00bfQue equipo se utiliza para garantizar el acabado de la losa de piso?"
  },
  {
    "id": "exam-sec-2-5-q028",
    "examId": "exam-sec-2-5",
    "questionNumber": 28,
    "questionText": "\u00bfC\u00f3mo se llama el sistema para medir la planicidad de las losas?"
  },
  {
    "id": "exam-sec-2-5-q029",
    "examId": "exam-sec-2-5",
    "questionNumber": 29,
    "questionText": "La resistencia recomendada para el concreto de camas de colado es de 22 MPa"
  },
  {
    "id": "exam-sec-2-5-q030",
    "examId": "exam-sec-2-5",
    "questionNumber": 30,
    "questionText": "Para una cama de arena, este material se dispersa a ______ profundidad del di\u00e1metro de la piedra"
  },
  {
    "id": "exam-sec-2-5-q031",
    "examId": "exam-sec-2-5",
    "questionNumber": 31,
    "questionText": "Es una forma de cepillar la \u00e1rea de los paneles colados sobre camas de arena"
  },
  {
    "id": "exam-sec-2-5-q032",
    "examId": "exam-sec-2-5",
    "questionNumber": 32,
    "questionText": "\u00bfA que altura debe sostenerse la platea de una cimentaci\u00f3n interior?"
  },
  {
    "id": "exam-sec-2-5-q033",
    "examId": "exam-sec-2-5",
    "questionNumber": 33,
    "questionText": "\u00bfEn que momento se retirar los moldes de las plateas?"
  },
  {
    "id": "exam-sec-2-5-q034",
    "examId": "exam-sec-2-5",
    "questionNumber": 34,
    "questionText": "\u00bfEn donde se usan las zaptas continuas?"
  },
  {
    "id": "exam-sec-2-5-q035",
    "examId": "exam-sec-2-5",
    "questionNumber": 35,
    "questionText": "\u00bfCual es la relaci\u00f3n entre la anchura de la zapata continua y la capacidad del suelo?"
  },
  {
    "id": "exam-sec-2-5-q036",
    "examId": "exam-sec-2-5",
    "questionNumber": 36,
    "questionText": "\u00bfA que altura se retrae la losa de piso para permitir que el panel se erija en la zapata?"
  },
  {
    "id": "exam-sec-2-5-q037",
    "examId": "exam-sec-2-5",
    "questionNumber": 37,
    "questionText": "Las zapatas cargadas exc\u00e9ntricamente son mas profundas"
  },
  {
    "id": "exam-sec-2-5-q038",
    "examId": "exam-sec-2-5",
    "questionNumber": 38,
    "questionText": "Las vigas de nivel especifican un refuerzo m\u00e1s ligero en la parte superior e inferior de la viga"
  },
  {
    "id": "exam-sec-2-5-q039",
    "examId": "exam-sec-2-5",
    "questionNumber": 39,
    "questionText": "\u00bfEn donde se ubican las zapatas aisladas?"
  },
  {
    "id": "exam-sec-2-5-q040",
    "examId": "exam-sec-2-5",
    "questionNumber": 40,
    "questionText": "La cimentaci\u00f3n de muro se construye de la parte superior de la zapata en lugar del panel"
  },
  {
    "id": "exam-sec-2-5-q041",
    "examId": "exam-sec-2-5",
    "questionNumber": 41,
    "questionText": "Las losas de piso soportadas sobre pilas son adecuadas para soportar grandes cargas de construcci\u00f3n."
  },
  {
    "id": "exam-sec-2-5-q042",
    "examId": "exam-sec-2-5",
    "questionNumber": 42,
    "questionText": "Si el pilar perforado tiene el di\u00e1metro suficiente el sistema es semejante a los de las pilas cuando se usan vigas de nivel o tapas"
  },
  {
    "id": "exam-sec-2-5-q043",
    "examId": "exam-sec-2-5",
    "questionNumber": 43,
    "questionText": "Los muros independientes se construyen colocando el panel en almohadillas temporales a cada extremo y despu\u00e9s colocando concreto debajo y alrededor de la parte inferior del panel"
  },
  {
    "id": "exam-sec-2-5-q044",
    "examId": "exam-sec-2-5",
    "questionNumber": 44,
    "questionText": "\u00bfCual es la longitud general  de las almohadillas de montaje de lechada?"
  },
  {
    "id": "exam-sec-2-5-q045",
    "examId": "exam-sec-2-5",
    "questionNumber": 45,
    "questionText": "Las almohadillas de soporte pl\u00e1stico son usadas de manera"
  },
  {
    "id": "exam-sec-2-5-q046",
    "examId": "exam-sec-2-5",
    "questionNumber": 46,
    "questionText": "\u00bfQue material es usado para los moldes de los paneles?"
  },
  {
    "id": "exam-sec-2-5-q047",
    "examId": "exam-sec-2-5",
    "questionNumber": 47,
    "questionText": "\u00bfCu\u00e1l es el espaciado recomendado para abrazaderas y soportes de los moldes de paneles?"
  },
  {
    "id": "exam-sec-2-5-q048",
    "examId": "exam-sec-2-5",
    "questionNumber": 48,
    "questionText": "\u00bfCon que material se sellan los chaflanes?"
  },
  {
    "id": "exam-sec-2-5-q049",
    "examId": "exam-sec-2-5",
    "questionNumber": 49,
    "questionText": "Es un sistema eficaz para dar textura a la superficie de un panel"
  },
  {
    "id": "exam-sec-2-5-q050",
    "examId": "exam-sec-2-5",
    "questionNumber": 50,
    "questionText": "Es una muesca moldeada en la cara del concreto hecha al aplicar materiales a la superficie de colado"
  },
  {
    "id": "exam-sec-2-5-q051",
    "examId": "exam-sec-2-5",
    "questionNumber": 51,
    "questionText": "Reducen la profundidad estructural efectiva del concreto."
  },
  {
    "id": "exam-sec-2-5-q052",
    "examId": "exam-sec-2-5",
    "questionNumber": 52,
    "questionText": "Las esquinas ingleteadas deben sellarse en los cuatro lados con dos capas de sellador de poliuretano para minimizar el ensanchamiento"
  },
  {
    "id": "exam-sec-2-5-q053",
    "examId": "exam-sec-2-5",
    "questionNumber": 53,
    "questionText": "El mayor n\u00famero de abrazaderas es m\u00e1s eficaz para soportar los moldes"
  },
  {
    "id": "exam-sec-2-5-q054",
    "examId": "exam-sec-2-5",
    "questionNumber": 54,
    "questionText": "Se vuelven parte integral del panel cuando se coloca el concreto, llenando las regiones met\u00e1licas huecas."
  },
  {
    "id": "exam-sec-2-5-q055",
    "examId": "exam-sec-2-5",
    "questionNumber": 55,
    "questionText": "\u00bfCuales son los motivos mas comunes para las cavidades en las caras de los paneles?"
  },
  {
    "id": "exam-sec-2-5-q056",
    "examId": "exam-sec-2-5",
    "questionNumber": 56,
    "questionText": "\u00bfQue es una pilastra?"
  },
  {
    "id": "exam-sec-2-5-q057",
    "examId": "exam-sec-2-5",
    "questionNumber": 57,
    "questionText": "\u00bfCon que fin se colocan ladrillos en la superficie de los paneles?"
  },
  {
    "id": "exam-sec-2-5-q058",
    "examId": "exam-sec-2-5",
    "questionNumber": 58,
    "questionText": "La textura de hoyuelos depende del grosor de la hoja de polietileno"
  },
  {
    "id": "exam-sec-2-5-q059",
    "examId": "exam-sec-2-5",
    "questionNumber": 59,
    "questionText": "\u00bfQue tama\u00f1o promedio de agregado se usa para realizar la textura de hoyuelos?"
  },
  {
    "id": "exam-sec-2-5-q060",
    "examId": "exam-sec-2-5",
    "questionNumber": 60,
    "questionText": "Hay muchas maneras de reducir los efectos del reflejo exacto de las juntas en los paneles."
  },
  {
    "id": "exam-sec-2-5-q061",
    "examId": "exam-sec-2-5",
    "questionNumber": 61,
    "questionText": "\u00bfC\u00f3mo se pueden corregir o enderezar  los arcos peque\u00f1os de la medara de moldaje?"
  },
  {
    "id": "exam-sec-2-5-q062",
    "examId": "exam-sec-2-5",
    "questionNumber": 62,
    "questionText": "\u00bfCon que se separan los moldes?"
  },
  {
    "id": "exam-sec-2-5-q063",
    "examId": "exam-sec-2-5",
    "questionNumber": 63,
    "questionText": "\u00bfQue puede sustituir el sistema de moldaje de franjas?"
  },
  {
    "id": "exam-sec-2-5-q064",
    "examId": "exam-sec-2-5",
    "questionNumber": 64,
    "questionText": "\u00bfEn que tipo de situaciones es preferente implementar moldaje hermanado?"
  },
  {
    "id": "exam-sec-2-5-q065",
    "examId": "exam-sec-2-5",
    "questionNumber": 65,
    "questionText": "\u00bfEn que consisten los paneles de formas irregulares?"
  },
  {
    "id": "exam-sec-2-5-q066",
    "examId": "exam-sec-2-5",
    "questionNumber": 66,
    "questionText": "\u00bfEn que paneles se usan los moldaje de masonita?"
  },
  {
    "id": "exam-sec-2-5-q067",
    "examId": "exam-sec-2-5",
    "questionNumber": 67,
    "questionText": "El panel emparedado esta dise\u00f1ado para ser del mismo grosor que uno normal"
  },
  {
    "id": "exam-sec-2-5-q068",
    "examId": "exam-sec-2-5",
    "questionNumber": 68,
    "questionText": "Moldaje de colado apilado es un sistema de moldes para a\u00f1adir otro(s) nivel(es) de moldes arriba del conjunto anterior."
  },
  {
    "id": "exam-sec-2-5-q069",
    "examId": "exam-sec-2-5",
    "questionNumber": 69,
    "questionText": "Implica pre perforar orificios en la losa de colado donde las anclas se instalar\u00e1n a trav\u00e9s de los productos de moldaje."
  },
  {
    "id": "exam-sec-2-5-q070",
    "examId": "exam-sec-2-5",
    "questionNumber": 70,
    "questionText": "\u00bfCu\u00e1l es la forma mas com\u00fan de sujeci\u00f3n mec\u00e1nica?"
  },
  {
    "id": "exam-sec-2-5-q071",
    "examId": "exam-sec-2-5",
    "questionNumber": 71,
    "questionText": "Factor que interfieren con el uso de adhesivos para sistemas adhesivos de sujeci\u00f3n"
  },
  {
    "id": "exam-sec-2-5-q072",
    "examId": "exam-sec-2-5",
    "questionNumber": 72,
    "questionText": "Compuesto usado para sellar los moldes"
  },
  {
    "id": "exam-sec-2-5-q073",
    "examId": "exam-sec-2-5",
    "questionNumber": 73,
    "questionText": "Antes de la inserci\u00f3n de cualquier refuerzo de acero, empotrados o insertos, se debe rociar desmoldante en la superficie de la losa."
  },
  {
    "id": "exam-sec-2-5-q074",
    "examId": "exam-sec-2-5",
    "questionNumber": 74,
    "questionText": "Las capas de desmoldante se roc\u00edan en \u00e1ngulos rectos"
  },
  {
    "id": "exam-sec-2-5-q075",
    "examId": "exam-sec-2-5",
    "questionNumber": 75,
    "questionText": "\u00bfCu\u00e1l es un efecto de aplicar el desmoldante incorrectamente?"
  },
  {
    "id": "exam-sec-2-5-q076",
    "examId": "exam-sec-2-5",
    "questionNumber": 76,
    "questionText": "El lavado ______ es el m\u00e9todo preferente para eliminar residuos de los paneles"
  },
  {
    "id": "exam-sec-2-5-q077",
    "examId": "exam-sec-2-5",
    "questionNumber": 77,
    "questionText": "Es la norma recomendada para consultar el refuerzo de paneles"
  },
  {
    "id": "exam-sec-2-5-q078",
    "examId": "exam-sec-2-5",
    "questionNumber": 78,
    "questionText": "\u00bfPorque son importantes los soportes para el refuerzo?"
  },
  {
    "id": "exam-sec-2-5-q079",
    "examId": "exam-sec-2-5",
    "questionNumber": 79,
    "questionText": "La tolerancia para el lugar de la barra dentro del espesor del panel y la cubierta sobre el refuerzo es de 20 mm"
  },
  {
    "id": "exam-sec-2-5-q080",
    "examId": "exam-sec-2-5",
    "questionNumber": 80,
    "questionText": "Se necesitan al menos dos barras No. 5 que se extienden 800 mm m\u00e1s all\u00e1 de la abertura del panel"
  },
  {
    "id": "exam-sec-2-5-q081",
    "examId": "exam-sec-2-5",
    "questionNumber": 81,
    "questionText": "Las cantidades normales de oxidaci\u00f3n ligera en el refuerzo de acero no son perjudiciales para su uso"
  },
  {
    "id": "exam-sec-2-5-q082",
    "examId": "exam-sec-2-5",
    "questionNumber": 82,
    "questionText": "Se recomienda evitar el refuerzo al aplicar o reaplicar desmoldante"
  },
  {
    "id": "exam-sec-2-5-q083",
    "examId": "exam-sec-2-5",
    "questionNumber": 83,
    "questionText": "Los ___________ requieren para levantar y montar los paneles desde su posici\u00f3n colada hasta su posici\u00f3n en el lugar final"
  },
  {
    "id": "exam-sec-2-5-q084",
    "examId": "exam-sec-2-5",
    "questionNumber": 84,
    "questionText": "\u00bfEn que etapa se colocan los insertos?"
  },
  {
    "id": "exam-sec-2-5-q085",
    "examId": "exam-sec-2-5",
    "questionNumber": 85,
    "questionText": "\u00bfA que profundidad se colocan los insertos de levantamiento?"
  },
  {
    "id": "exam-sec-2-5-q086",
    "examId": "exam-sec-2-5",
    "questionNumber": 86,
    "questionText": "\u00bfCuales son los dos tipos de insertos?"
  },
  {
    "id": "exam-sec-2-5-q087",
    "examId": "exam-sec-2-5",
    "questionNumber": 87,
    "questionText": "\u00bfCu\u00e1l es la tolerancia para colocar los insertos de arriostramiento dentro del lugar especificado?"
  },
  {
    "id": "exam-sec-2-5-q088",
    "examId": "exam-sec-2-5",
    "questionNumber": 88,
    "questionText": "\u00bfA que tipo de cargas est\u00e1n sometidas las riostras?"
  },
  {
    "id": "exam-sec-2-5-q089",
    "examId": "exam-sec-2-5",
    "questionNumber": 89,
    "questionText": "Es ejemplo de una pieza empotrada estructural"
  },
  {
    "id": "exam-sec-2-5-q090",
    "examId": "exam-sec-2-5",
    "questionNumber": 90,
    "questionText": "Las placas empotradas galvanizadas no deben usarse en ambientes corrosivos si deber\u00e1n quedar expuestas"
  },
  {
    "id": "exam-sec-2-5-q091",
    "examId": "exam-sec-2-5",
    "questionNumber": 91,
    "questionText": "Todos los empotramientos deben estar en el sitio de la obra antes de colar los paneles."
  },
  {
    "id": "exam-sec-2-5-q092",
    "examId": "exam-sec-2-5",
    "questionNumber": 92,
    "questionText": "Las barras de cuerda se cuelan en el panel de forma vertical"
  },
  {
    "id": "exam-sec-3-1-q001",
    "examId": "exam-sec-3-1",
    "questionNumber": 1,
    "questionText": "Es el tiempo entre la llegada de camiones a la obra"
  },
  {
    "id": "exam-sec-3-1-q002",
    "examId": "exam-sec-3-1",
    "questionNumber": 2,
    "questionText": "\u00bfCu\u00e1l es el di\u00e1metro m\u00ednimo de manguera requerido para el bombeo de concreto?"
  },
  {
    "id": "exam-sec-3-1-q003",
    "examId": "exam-sec-3-1",
    "questionNumber": 3,
    "questionText": "Desventajas del uso de un cuchara para colocar el concreto"
  },
  {
    "id": "exam-sec-3-1-q004",
    "examId": "exam-sec-3-1",
    "questionNumber": 4,
    "questionText": "La clave para una colocaci\u00f3n exitosa es controlar la presi\u00f3n inicial del concreto en la losa de colado"
  },
  {
    "id": "exam-sec-3-1-q005",
    "examId": "exam-sec-3-1",
    "questionNumber": 5,
    "questionText": "La altura de ca\u00edda debe mantenerse al m\u00ednimo para evitar la segregaci\u00f3n del agregado"
  },
  {
    "id": "exam-sec-3-1-q006",
    "examId": "exam-sec-3-1",
    "questionNumber": 6,
    "questionText": "\u00bfEn que secci\u00f3n del panel debe comenzar la colocaci\u00f3n?"
  },
  {
    "id": "exam-sec-3-1-q007",
    "examId": "exam-sec-3-1",
    "questionNumber": 7,
    "questionText": "\u00bfPor qu\u00e9 la vibraci\u00f3n es critica?"
  },
  {
    "id": "exam-sec-3-1-q008",
    "examId": "exam-sec-3-1",
    "questionNumber": 8,
    "questionText": "Es un resultado del exceso de agregado"
  },
  {
    "id": "exam-sec-3-1-q009",
    "examId": "exam-sec-3-1",
    "questionNumber": 9,
    "questionText": "\u00bfCu\u00e1ndo comienza el proceso de la construcci\u00f3n de un panel emparedado?"
  },
  {
    "id": "exam-sec-3-1-q010",
    "examId": "exam-sec-3-1",
    "questionNumber": 10,
    "questionText": "\u00bfEn que secci\u00f3n del panel deben instalarse los conectores?"
  },
  {
    "id": "exam-sec-3-1-q011",
    "examId": "exam-sec-3-1",
    "questionNumber": 11,
    "questionText": "\u00bfCu\u00e1l es el revenimiento recomendado para paneles emparedados?"
  },
  {
    "id": "exam-sec-3-1-q012",
    "examId": "exam-sec-3-1",
    "questionNumber": 12,
    "questionText": "Una prueba de extracci\u00f3n en el conector debe realizarse despu\u00e9s de que el concreto exterior alcance un ______ en su resistencia de 28 d\u00edas."
  },
  {
    "id": "exam-sec-3-1-q013",
    "examId": "exam-sec-3-1",
    "questionNumber": 13,
    "questionText": "\u00bfQue equipo se recomienda para el acabado optimo de la superficie de un panel?"
  },
  {
    "id": "exam-sec-3-1-q014",
    "examId": "exam-sec-3-1",
    "questionNumber": 14,
    "questionText": "En cuanto se terminen los acabados debe usarse una llana para asegurar la superficie del panel"
  },
  {
    "id": "exam-sec-3-1-q015",
    "examId": "exam-sec-3-1",
    "questionNumber": 15,
    "questionText": "Equipo que se usa para realizar el desmoldado final"
  },
  {
    "id": "exam-sec-3-1-q016",
    "examId": "exam-sec-3-1",
    "questionNumber": 16,
    "questionText": "\u00bfQue es un embrague de levantamiento?"
  },
  {
    "id": "exam-sec-3-1-q017",
    "examId": "exam-sec-3-1",
    "questionNumber": 17,
    "questionText": "La ____________ es la viga principal que transfiere la sujeci\u00f3n de cable individual a toda la disposici\u00f3n de aparejos de los paneles que se levantar\u00e1n."
  },
  {
    "id": "exam-sec-3-1-q018",
    "examId": "exam-sec-3-1",
    "questionNumber": 18,
    "questionText": "Se usan para crear dos puntos conectores desde un solo cable"
  },
  {
    "id": "exam-sec-3-1-q019",
    "examId": "exam-sec-3-1",
    "questionNumber": 19,
    "questionText": "Proceso de usar la gr\u00faa para levantar un panel de su lugar de colado y conducirlo a su posici\u00f3n en la estructura"
  },
  {
    "id": "exam-sec-3-1-q020",
    "examId": "exam-sec-3-1",
    "questionNumber": 20,
    "questionText": "Cuando se utilizan para paneles de dinteles y paneles peque\u00f1os, los insertos de levantamiento se ubican en la parte superior del panel en vez de en la cara."
  },
  {
    "id": "exam-sec-3-1-q021",
    "examId": "exam-sec-3-1",
    "questionNumber": 21,
    "questionText": "Antes de iniciar maniobras de levantamiento debe asegurarse el correcto funcionamiento de:"
  },
  {
    "id": "exam-sec-3-1-q022",
    "examId": "exam-sec-3-1",
    "questionNumber": 22,
    "questionText": "\u00bfCu\u00e1l es el margen de tiempo para conectar los herrajes de levantamiento?"
  },
  {
    "id": "exam-sec-3-1-q023",
    "examId": "exam-sec-3-1",
    "questionNumber": 23,
    "questionText": "Con la gr\u00faa aun sosteniendo el panel, las _____ se ajustan hasta que el panel se plomea."
  },
  {
    "id": "exam-sec-3-1-q024",
    "examId": "exam-sec-3-1",
    "questionNumber": 24,
    "questionText": "La gr\u00faa debe soltarse \u00fanicamente despu\u00e9s de que se haya instalado todo el arriostramiento, se hayan terminado todas las conexiones de las riostras y se hay confirmado la nivelaci\u00f3n del panel."
  },
  {
    "id": "exam-sec-3-1-q025",
    "examId": "exam-sec-3-1",
    "questionNumber": 25,
    "questionText": "El n\u00famero, el tama\u00f1o y la colocaci\u00f3n de las riostras se basan en las cargas de servicio"
  },
  {
    "id": "exam-sec-3-1-q026",
    "examId": "exam-sec-3-1",
    "questionNumber": 26,
    "questionText": "Las riostras pueden ser tubulares telesc\u00f3picas o de un largo fijo."
  },
  {
    "id": "exam-sec-3-1-q027",
    "examId": "exam-sec-3-1",
    "questionNumber": 27,
    "questionText": "El _________ del arriostramiento de madera del extremo y el techo debe sujetarse a una placa de madera fijada con clavos al piso o al panel."
  },
  {
    "id": "exam-sec-3-1-q028",
    "examId": "exam-sec-3-1",
    "questionNumber": 28,
    "questionText": "\u00bfCu\u00e1l es la separaci\u00f3n entre riostras recomendada para prevenir el movimiento lateral del sistema?"
  },
  {
    "id": "exam-sec-3-1-q029",
    "examId": "exam-sec-3-1",
    "questionNumber": 29,
    "questionText": "Los puntos de arriostramiento deben compensarse horizontalmente al menos 250 mm desde los insertos de levantamiento de la cara."
  },
  {
    "id": "exam-sec-3-1-q030",
    "examId": "exam-sec-3-1",
    "questionNumber": 30,
    "questionText": "\u00bfCu\u00e1l es el di\u00e1metro del perno roscado usado para empotrar un inserto?"
  },
  {
    "id": "exam-sec-3-1-q031",
    "examId": "exam-sec-3-1",
    "questionNumber": 31,
    "questionText": "Las riostras son de uso:"
  },
  {
    "id": "exam-sec-3-1-q032",
    "examId": "exam-sec-3-1",
    "questionNumber": 32,
    "questionText": "\u00bfA que elemento se conecta la pata de la riostra?"
  },
  {
    "id": "exam-sec-3-1-q033",
    "examId": "exam-sec-3-1",
    "questionNumber": 33,
    "questionText": "Es un sistema alternativo de arriostramiento"
  },
  {
    "id": "exam-sec-3-1-q034",
    "examId": "exam-sec-3-1",
    "questionNumber": 34,
    "questionText": "\u00bfPor qu\u00e9 es importante el arriostramiento de las esquinas?"
  },
  {
    "id": "exam-sec-3-1-q035",
    "examId": "exam-sec-3-1",
    "questionNumber": 35,
    "questionText": "Las zapatas de concreto temporales continuas o una masa c\u00fabica de concreto prefabricado enterrada en el suelo son :"
  },
  {
    "id": "exam-sec-3-1-q036",
    "examId": "exam-sec-3-1",
    "questionNumber": 36,
    "questionText": "\u00bfCada cuanto debe realizarse el mantenimiento de las riostras?"
  },
  {
    "id": "exam-sec-3-1-q037",
    "examId": "exam-sec-3-1",
    "questionNumber": 37,
    "questionText": "La adhesi\u00f3n de la losa no es nada m\u00e1s que la resistencia a la succi\u00f3n del agua que penetr\u00f3 debajo del panel."
  },
  {
    "id": "exam-sec-3-1-q038",
    "examId": "exam-sec-3-1",
    "questionNumber": 38,
    "questionText": "Cubrir los paneles con una carpa y aplicar calor externo abajo de las carpas puede ayudar en la separaci\u00f3n de paneles pegados por exceso de desmoldante"
  },
  {
    "id": "exam-sec-3-1-q039",
    "examId": "exam-sec-3-1",
    "questionNumber": 39,
    "questionText": "Se agrega una placa de levantamiento apernada de emergencia para equilibrar mejor el panel."
  },
  {
    "id": "exam-sec-3-1-q040",
    "examId": "exam-sec-3-1",
    "questionNumber": 40,
    "questionText": "\u00bfA que se debe una torcedura en la polea?"
  },
  {
    "id": "exam-sec-3-1-q041",
    "examId": "exam-sec-3-1",
    "questionNumber": 41,
    "questionText": "Es com\u00fan regresar un panel a la posici\u00f3n horizontal para sondear la resistencia del sistema de levantamiento"
  },
  {
    "id": "exam-sec-3-1-q042",
    "examId": "exam-sec-3-1",
    "questionNumber": 42,
    "questionText": "El dintel se conecta a los insertos lo m\u00e1s pronto posible para impedir que se mueva."
  },
  {
    "id": "exam-sec-3-1-q043",
    "examId": "exam-sec-3-1",
    "questionNumber": 43,
    "questionText": "El levantamiento en conjunto es el proceso de sincronizaci\u00f3n entre dos gr\u00faas para levantar un panel"
  },
  {
    "id": "exam-sec-3-1-q044",
    "examId": "exam-sec-3-1",
    "questionNumber": 44,
    "questionText": "Es un uso que se le da a los paneles de muros de patio"
  },
  {
    "id": "exam-sec-3-1-q045",
    "examId": "exam-sec-3-1",
    "questionNumber": 45,
    "questionText": "\u00bfCu\u00e1ntas fases constituyen el ultimo proceso del proyecto?"
  },
  {
    "id": "exam-sec-3-1-q046",
    "examId": "exam-sec-3-1",
    "questionNumber": 46,
    "questionText": "El espacio abajo de los paneles debe lecharse lo m\u00e1s pronto posible despu\u00e9s de montar y arriostrar los paneles"
  },
  {
    "id": "exam-sec-3-1-q047",
    "examId": "exam-sec-3-1",
    "questionNumber": 47,
    "questionText": "Las conexiones del techo y piso soportado usualmente consisten en __________ o asientos de vigas soldados a los empotrados."
  },
  {
    "id": "exam-sec-3-1-q048",
    "examId": "exam-sec-3-1",
    "questionNumber": 48,
    "questionText": "\u00bfDe que  material son las soleras que conecta el diafragma de techo?"
  },
  {
    "id": "exam-sec-3-1-q049",
    "examId": "exam-sec-3-1",
    "questionNumber": 49,
    "questionText": "\u00bfEn que situaciones se recomienda el uso de conexiones de barra de cuerda?"
  },
  {
    "id": "exam-sec-3-1-q050",
    "examId": "exam-sec-3-1",
    "questionNumber": 50,
    "questionText": "\u00bfEn que caso se recomienda la sujeci\u00f3n del panel a la cimentaci\u00f3n?"
  },
  {
    "id": "exam-sec-3-1-q051",
    "examId": "exam-sec-3-1",
    "questionNumber": 51,
    "questionText": "Para que una conexi\u00f3n panel-zapata clasifique como muro alto debe poseer:"
  },
  {
    "id": "exam-sec-3-1-q052",
    "examId": "exam-sec-3-1",
    "questionNumber": 52,
    "questionText": "\u00bfQu\u00e9 tipo de resistencia utilizan las conexiones del panel a la losa de piso?"
  },
  {
    "id": "exam-sec-3-1-q053",
    "examId": "exam-sec-3-1",
    "questionNumber": 53,
    "questionText": "El refuerzo no es necesario en la franja trasera y en cualquier panel de losa requerido para proporcionar resistencia lateral."
  },
  {
    "id": "exam-sec-3-1-q054",
    "examId": "exam-sec-3-1",
    "questionNumber": 54,
    "questionText": "\u00bfCu\u00e1l es el factor mas importante al dise\u00f1ar las conexiones panel a panel?"
  },
  {
    "id": "exam-sec-3-1-q055",
    "examId": "exam-sec-3-1",
    "questionNumber": 55,
    "questionText": "\u00bfQue falla previenen las conexiones entre paneles?"
  },
  {
    "id": "exam-sec-3-1-q056",
    "examId": "exam-sec-3-1",
    "questionNumber": 56,
    "questionText": "Son las \u00e1reas de la losa entre el vaciado inicial de la losa y los paneles montados."
  },
  {
    "id": "exam-sec-3-1-q057",
    "examId": "exam-sec-3-1",
    "questionNumber": 57,
    "questionText": "\u00bfPor que es importante el relleno en las franjas de cierre?"
  },
  {
    "id": "exam-sec-3-1-q058",
    "examId": "exam-sec-3-1",
    "questionNumber": 58,
    "questionText": "Los agujeros que dejan las conexiones de los pernos para las riostras se llenan con agregado"
  },
  {
    "id": "exam-sec-3-1-q059",
    "examId": "exam-sec-3-1",
    "questionNumber": 59,
    "questionText": "\u00bfCual es el primer paso en la preparaci\u00f3n de la superficie?"
  },
  {
    "id": "exam-sec-3-1-q060",
    "examId": "exam-sec-3-1",
    "questionNumber": 60,
    "questionText": "Las aletas a lo largo de los bordes del panel y las franjas de molduras son bordes afilados"
  },
  {
    "id": "exam-sec-3-1-q061",
    "examId": "exam-sec-3-1",
    "questionNumber": 61,
    "questionText": "\u00bfCu\u00e1l es el material com\u00fan para resanado de las superficies exteriores?"
  },
  {
    "id": "exam-sec-3-1-q062",
    "examId": "exam-sec-3-1",
    "questionNumber": 62,
    "questionText": "El proceso del resanado de superficies comienza ______"
  },
  {
    "id": "exam-sec-3-1-q063",
    "examId": "exam-sec-3-1",
    "questionNumber": 63,
    "questionText": "\u00bfCon que prop\u00f3sito se calafatean las juntas de los paneles?"
  },
  {
    "id": "exam-sec-3-1-q064",
    "examId": "exam-sec-3-1",
    "questionNumber": 64,
    "questionText": "\u00bfCuales son los dos pasos principales en el calafateado de las juntas?"
  },
  {
    "id": "exam-sec-3-1-q065",
    "examId": "exam-sec-3-1",
    "questionNumber": 65,
    "questionText": "\u00bfCual es la diferencia entre una calefateado \n tipo S y M?"
  },
  {
    "id": "exam-sec-3-1-q066",
    "examId": "exam-sec-3-1",
    "questionNumber": 66,
    "questionText": "\u00bfCon que fin se coloca un cord\u00f3n de espuma en la junta?"
  },
  {
    "id": "exam-sec-3-1-q067",
    "examId": "exam-sec-3-1",
    "questionNumber": 67,
    "questionText": "El acabado de agregado expuesto consiste en raspar la superficie del panel alrededor del agregado dej\u00e1ndolo expuesto"
  },
  {
    "id": "exam-sec-3-1-q068",
    "examId": "exam-sec-3-1",
    "questionNumber": 68,
    "questionText": "Cuando se especifica una superficie de sopleteado mediano o pesado con arena, se recomienda que se use un retardador qu\u00edmico."
  },
  {
    "id": "exam-sec-3-1-q069",
    "examId": "exam-sec-3-1",
    "questionNumber": 69,
    "questionText": "\u00bfCual es la cantidad de material eliminado para lograr un acabado abujardado?"
  },
  {
    "id": "exam-sec-3-1-q070",
    "examId": "exam-sec-3-1",
    "questionNumber": 70,
    "questionText": "\u00bfCu\u00e1l es el nivel de pH del panel ideal para aplicar la pintura?"
  },
  {
    "id": "exam-sec-3-1-q071",
    "examId": "exam-sec-3-1",
    "questionNumber": 71,
    "questionText": "Es un material que absorbe humedad usado en interiores"
  },
  {
    "id": "exam-sec-3-1-q072",
    "examId": "exam-sec-3-1",
    "questionNumber": 72,
    "questionText": "Es el material base para sistemas de acabados exteriores"
  },
  {
    "id": "exam-sec-3-1-q073",
    "examId": "exam-sec-3-1",
    "questionNumber": 73,
    "questionText": "Las capas base se aplican sobre la malla seg\u00fan los requisitos del fabricante seguido por las capas de acabado pigmentadas."
  },
  {
    "id": "exam-sec-3-1-q074",
    "examId": "exam-sec-3-1",
    "questionNumber": 74,
    "questionText": "El agrietamiento en mapa se previene quitando el agua exudada en cuanto se forma y no demorando el curado."
  },
  {
    "id": "exam-sec-3-1-q075",
    "examId": "exam-sec-3-1",
    "questionNumber": 75,
    "questionText": "Para prevenir el agrietamiento ______ debe evitar colocarse cuando en velocidades de viento mayores a 8 km/h"
  },
  {
    "id": "exam-sec-3-1-q076",
    "examId": "exam-sec-3-1",
    "questionNumber": 76,
    "questionText": "Las grietas de este tama\u00f1o son inaceptables en un \u00e1rea de trafico"
  },
  {
    "id": "exam-sec-3-1-q077",
    "examId": "exam-sec-3-1",
    "questionNumber": 77,
    "questionText": "Las grietas de este tama\u00f1o indican una retracci\u00f3n desproporcionada"
  },
  {
    "id": "exam-sec-3-1-q078",
    "examId": "exam-sec-3-1",
    "questionNumber": 78,
    "questionText": "\u00bfCu\u00e1l son los factores que deben asegurarse para evitar la combadura?"
  },
  {
    "id": "exam-sec-3-1-q079",
    "examId": "exam-sec-3-1",
    "questionNumber": 79,
    "questionText": "Un remedio para la combadura es colocar peso de manera progresiva sobre la cavidad"
  },
  {
    "id": "exam-sec-3-1-q080",
    "examId": "exam-sec-3-1",
    "questionNumber": 80,
    "questionText": "El levantamiento de polvo se da por el exceso de hidrataci\u00f3n"
  },
  {
    "id": "exam-sec-3-1-q081",
    "examId": "exam-sec-3-1",
    "questionNumber": 81,
    "questionText": "Una buena calza y un suporte adecuado puede minimizar la alteraci\u00f3n de una junta por presiones del trafico"
  },
  {
    "id": "exam-sec-3-1-q082",
    "examId": "exam-sec-3-1",
    "questionNumber": 82,
    "questionText": "El _______ se da cuando se aplica el acabado antes de quitar el agua exudada"
  },
  {
    "id": "exam-sec-3-1-q083",
    "examId": "exam-sec-3-1",
    "questionNumber": 83,
    "questionText": "El movimiento de los paneles losa hasta su posici\u00f3n final puede rayar o raspar la superficie de la losa de piso, esto se conoce como:"
  },
  {
    "id": "exam-sec-3-1-q084",
    "examId": "exam-sec-3-1",
    "questionNumber": 84,
    "questionText": "\u00bfC\u00f3mo se repara una grieta en el panel?"
  },
  {
    "id": "exam-sec-3-1-q085",
    "examId": "exam-sec-3-1",
    "questionNumber": 85,
    "questionText": "\u00bfD\u00f3nde se coloca el refuerzo para evitar las grietas diagonales en las aberturas de un panel?"
  },
  {
    "id": "exam-sec-3-1-q086",
    "examId": "exam-sec-3-1",
    "questionNumber": 86,
    "questionText": "Es el resultado de contracci\u00f3n longitudinal cuando las almohadillas de montaje restringen el movimiento de los extremos del panel."
  },
  {
    "id": "exam-sec-3-1-q087",
    "examId": "exam-sec-3-1",
    "questionNumber": 87,
    "questionText": "Este tipo de agrietamiento parece ser m\u00e1s dominante en climas c\u00e1lidos"
  },
  {
    "id": "exam-sec-3-1-q088",
    "examId": "exam-sec-3-1",
    "questionNumber": 88,
    "questionText": "Este tipo de agrietamiento a menudo ocurren en las molduras debido al menor espesor"
  },
  {
    "id": "exam-sec-3-1-q089",
    "examId": "exam-sec-3-1",
    "questionNumber": 89,
    "questionText": "Estas grietas son bastante comunes y usualmente no son de importancia estructural."
  },
  {
    "id": "exam-sec-3-1-q090",
    "examId": "exam-sec-3-1",
    "questionNumber": 90,
    "questionText": "Si las grietas son demasiado grandes o son de una inquietud estructural, puede ser necesario rellenarlas con epoxi o un rellenador para juntas comparable"
  },
  {
    "id": "exam-sec-3-1-q091",
    "examId": "exam-sec-3-1",
    "questionNumber": 91,
    "questionText": "Las grietas grandes o estructurales de un ancho mayor a 0.33 mm usualmente pueden repararse con una inyecci\u00f3n a presi\u00f3n de epoxi estructural"
  },
  {
    "id": "exam-sec-3-1-q092",
    "examId": "exam-sec-3-1",
    "questionNumber": 92,
    "questionText": "Cuando sea posible, aplique compresi\u00f3n a la cara del lado de la grieta del panel para cerrar la grieta tanto como sea posible."
  },
  {
    "id": "exam-sec-3-1-q093",
    "examId": "exam-sec-3-1",
    "questionNumber": 93,
    "questionText": "Sirve para evitar parches oscuros en los paneles"
  },
  {
    "id": "exam-sec-3-1-q094",
    "examId": "exam-sec-3-1",
    "questionNumber": 94,
    "questionText": "El uso de ______ resuelve el asentamiento de la zapata"
  },
  {
    "id": "exam-sec-3-5-q001",
    "examId": "exam-sec-3-5",
    "questionNumber": 1,
    "questionText": "Es el tiempo entre la llegada de camiones a la obra"
  },
  {
    "id": "exam-sec-3-5-q002",
    "examId": "exam-sec-3-5",
    "questionNumber": 2,
    "questionText": "\u00bfCu\u00e1l es el di\u00e1metro m\u00ednimo de manguera requerido para el bombeo de concreto?"
  },
  {
    "id": "exam-sec-3-5-q003",
    "examId": "exam-sec-3-5",
    "questionNumber": 3,
    "questionText": "Desventajas del uso de un cuchara para colocar el concreto"
  },
  {
    "id": "exam-sec-3-5-q004",
    "examId": "exam-sec-3-5",
    "questionNumber": 4,
    "questionText": "La clave para una colocaci\u00f3n exitosa es controlar la presi\u00f3n inicial del concreto en la losa de colado"
  },
  {
    "id": "exam-sec-3-5-q005",
    "examId": "exam-sec-3-5",
    "questionNumber": 5,
    "questionText": "La altura de ca\u00edda debe mantenerse al m\u00ednimo para evitar la segregaci\u00f3n del agregado"
  },
  {
    "id": "exam-sec-3-5-q006",
    "examId": "exam-sec-3-5",
    "questionNumber": 6,
    "questionText": "\u00bfEn que secci\u00f3n del panel debe comenzar la colocaci\u00f3n?"
  },
  {
    "id": "exam-sec-3-5-q007",
    "examId": "exam-sec-3-5",
    "questionNumber": 7,
    "questionText": "\u00bfPor qu\u00e9 la vibraci\u00f3n es critica?"
  },
  {
    "id": "exam-sec-3-5-q008",
    "examId": "exam-sec-3-5",
    "questionNumber": 8,
    "questionText": "Es un resultado del exceso de agregado"
  },
  {
    "id": "exam-sec-3-5-q009",
    "examId": "exam-sec-3-5",
    "questionNumber": 9,
    "questionText": "\u00bfCu\u00e1ndo comienza el proceso de la construcci\u00f3n de un panel emparedado?"
  },
  {
    "id": "exam-sec-3-5-q010",
    "examId": "exam-sec-3-5",
    "questionNumber": 10,
    "questionText": "\u00bfEn que secci\u00f3n del panel deben instalarse los conectores?"
  },
  {
    "id": "exam-sec-3-5-q011",
    "examId": "exam-sec-3-5",
    "questionNumber": 11,
    "questionText": "\u00bfCu\u00e1l es el revenimiento recomendado para paneles emparedados?"
  },
  {
    "id": "exam-sec-3-5-q012",
    "examId": "exam-sec-3-5",
    "questionNumber": 12,
    "questionText": "Una prueba de extracci\u00f3n en el conector debe realizarse despu\u00e9s de que el concreto exterior alcance un ______ en su resistencia de 28 d\u00edas."
  },
  {
    "id": "exam-sec-3-5-q013",
    "examId": "exam-sec-3-5",
    "questionNumber": 13,
    "questionText": "\u00bfQue equipo se recomienda para el acabado optimo de la superficie de un panel?"
  },
  {
    "id": "exam-sec-3-5-q014",
    "examId": "exam-sec-3-5",
    "questionNumber": 14,
    "questionText": "En cuanto se terminen los acabados debe usarse una llana para asegurar la superficie del panel"
  },
  {
    "id": "exam-sec-3-5-q015",
    "examId": "exam-sec-3-5",
    "questionNumber": 15,
    "questionText": "Equipo que se usa para realizar el desmoldado final"
  },
  {
    "id": "exam-sec-3-5-q016",
    "examId": "exam-sec-3-5",
    "questionNumber": 16,
    "questionText": "\u00bfQue es un embrague de levantamiento?"
  },
  {
    "id": "exam-sec-3-5-q017",
    "examId": "exam-sec-3-5",
    "questionNumber": 17,
    "questionText": "La ____________ es la viga principal que transfiere la sujeci\u00f3n de cable individual a toda la disposici\u00f3n de aparejos de los paneles que se levantar\u00e1n."
  },
  {
    "id": "exam-sec-3-5-q018",
    "examId": "exam-sec-3-5",
    "questionNumber": 18,
    "questionText": "Se usan para crear dos puntos conectores desde un solo cable"
  },
  {
    "id": "exam-sec-3-5-q019",
    "examId": "exam-sec-3-5",
    "questionNumber": 19,
    "questionText": "Proceso de usar la gr\u00faa para levantar un panel de su lugar de colado y conducirlo a su posici\u00f3n en la estructura"
  },
  {
    "id": "exam-sec-3-5-q020",
    "examId": "exam-sec-3-5",
    "questionNumber": 20,
    "questionText": "Cuando se utilizan para paneles de dinteles y paneles peque\u00f1os, los insertos de levantamiento se ubican en la parte superior del panel en vez de en la cara."
  },
  {
    "id": "exam-sec-3-5-q021",
    "examId": "exam-sec-3-5",
    "questionNumber": 21,
    "questionText": "Antes de iniciar maniobras de levantamiento debe asegurarse el correcto funcionamiento de:"
  },
  {
    "id": "exam-sec-3-5-q022",
    "examId": "exam-sec-3-5",
    "questionNumber": 22,
    "questionText": "\u00bfCu\u00e1l es el margen de tiempo para conectar los herrajes de levantamiento?"
  },
  {
    "id": "exam-sec-3-5-q023",
    "examId": "exam-sec-3-5",
    "questionNumber": 23,
    "questionText": "Con la gr\u00faa aun sosteniendo el panel, las _____ se ajustan hasta que el panel se plomea."
  },
  {
    "id": "exam-sec-3-5-q024",
    "examId": "exam-sec-3-5",
    "questionNumber": 24,
    "questionText": "La gr\u00faa debe soltarse \u00fanicamente despu\u00e9s de que se haya instalado todo el arriostramiento, se hayan terminado todas las conexiones de las riostras y se hay confirmado la nivelaci\u00f3n del panel."
  },
  {
    "id": "exam-sec-3-5-q025",
    "examId": "exam-sec-3-5",
    "questionNumber": 25,
    "questionText": "El n\u00famero, el tama\u00f1o y la colocaci\u00f3n de las riostras se basan en las cargas de servicio"
  },
  {
    "id": "exam-sec-3-5-q026",
    "examId": "exam-sec-3-5",
    "questionNumber": 26,
    "questionText": "Las riostras pueden ser tubulares telesc\u00f3picas o de un largo fijo."
  },
  {
    "id": "exam-sec-3-5-q027",
    "examId": "exam-sec-3-5",
    "questionNumber": 27,
    "questionText": "El _________ del arriostramiento de madera del extremo y el techo debe sujetarse a una placa de madera fijada con clavos al piso o al panel."
  },
  {
    "id": "exam-sec-3-5-q028",
    "examId": "exam-sec-3-5",
    "questionNumber": 28,
    "questionText": "\u00bfCu\u00e1l es la separaci\u00f3n entre riostras recomendada para prevenir el movimiento lateral del sistema?"
  },
  {
    "id": "exam-sec-3-5-q029",
    "examId": "exam-sec-3-5",
    "questionNumber": 29,
    "questionText": "Los puntos de arriostramiento deben compensarse horizontalmente al menos 250 mm desde los insertos de levantamiento de la cara."
  },
  {
    "id": "exam-sec-3-5-q030",
    "examId": "exam-sec-3-5",
    "questionNumber": 30,
    "questionText": "\u00bfCu\u00e1l es el di\u00e1metro del perno roscado usado para empotrar un inserto?"
  },
  {
    "id": "exam-sec-3-5-q031",
    "examId": "exam-sec-3-5",
    "questionNumber": 31,
    "questionText": "Las riostras son de uso:"
  },
  {
    "id": "exam-sec-3-5-q032",
    "examId": "exam-sec-3-5",
    "questionNumber": 32,
    "questionText": "\u00bfA que elemento se conecta la pata de la riostra?"
  },
  {
    "id": "exam-sec-3-5-q033",
    "examId": "exam-sec-3-5",
    "questionNumber": 33,
    "questionText": "Es un sistema alternativo de arriostramiento"
  },
  {
    "id": "exam-sec-3-5-q034",
    "examId": "exam-sec-3-5",
    "questionNumber": 34,
    "questionText": "\u00bfPor qu\u00e9 es importante el arriostramiento de las esquinas?"
  },
  {
    "id": "exam-sec-3-5-q035",
    "examId": "exam-sec-3-5",
    "questionNumber": 35,
    "questionText": "Las zapatas de concreto temporales continuas o una masa c\u00fabica de concreto prefabricado enterrada en el suelo son :"
  },
  {
    "id": "exam-sec-3-5-q036",
    "examId": "exam-sec-3-5",
    "questionNumber": 36,
    "questionText": "\u00bfCada cuanto debe realizarse el mantenimiento de las riostras?"
  },
  {
    "id": "exam-sec-3-5-q037",
    "examId": "exam-sec-3-5",
    "questionNumber": 37,
    "questionText": "La adhesi\u00f3n de la losa no es nada m\u00e1s que la resistencia a la succi\u00f3n del agua que penetr\u00f3 debajo del panel."
  },
  {
    "id": "exam-sec-3-5-q038",
    "examId": "exam-sec-3-5",
    "questionNumber": 38,
    "questionText": "Cubrir los paneles con una carpa y aplicar calor externo abajo de las carpas puede ayudar en la separaci\u00f3n de paneles pegados por exceso de desmoldante"
  },
  {
    "id": "exam-sec-3-5-q039",
    "examId": "exam-sec-3-5",
    "questionNumber": 39,
    "questionText": "Se agrega una placa de levantamiento apernada de emergencia para equilibrar mejor el panel."
  },
  {
    "id": "exam-sec-3-5-q040",
    "examId": "exam-sec-3-5",
    "questionNumber": 40,
    "questionText": "\u00bfA que se debe una torcedura en la polea?"
  },
  {
    "id": "exam-sec-3-5-q041",
    "examId": "exam-sec-3-5",
    "questionNumber": 41,
    "questionText": "Es com\u00fan regresar un panel a la posici\u00f3n horizontal para sondear la resistencia del sistema de levantamiento"
  },
  {
    "id": "exam-sec-3-5-q042",
    "examId": "exam-sec-3-5",
    "questionNumber": 42,
    "questionText": "El dintel se conecta a los insertos lo m\u00e1s pronto posible para impedir que se mueva."
  },
  {
    "id": "exam-sec-3-5-q043",
    "examId": "exam-sec-3-5",
    "questionNumber": 43,
    "questionText": "El levantamiento en conjunto es el proceso de sincronizaci\u00f3n entre dos gr\u00faas para levantar un panel"
  },
  {
    "id": "exam-sec-3-5-q044",
    "examId": "exam-sec-3-5",
    "questionNumber": 44,
    "questionText": "Es un uso que se le da a los paneles de muros de patio"
  },
  {
    "id": "exam-sec-3-5-q045",
    "examId": "exam-sec-3-5",
    "questionNumber": 45,
    "questionText": "\u00bfCu\u00e1ntas fases constituyen el ultimo proceso del proyecto?"
  },
  {
    "id": "exam-sec-3-5-q046",
    "examId": "exam-sec-3-5",
    "questionNumber": 46,
    "questionText": "El espacio abajo de los paneles debe lecharse lo m\u00e1s pronto posible despu\u00e9s de montar y arriostrar los paneles"
  },
  {
    "id": "exam-sec-3-5-q047",
    "examId": "exam-sec-3-5",
    "questionNumber": 47,
    "questionText": "Las conexiones del techo y piso soportado usualmente consisten en __________ o asientos de vigas soldados a los empotrados."
  },
  {
    "id": "exam-sec-3-5-q048",
    "examId": "exam-sec-3-5",
    "questionNumber": 48,
    "questionText": "\u00bfDe que  material son las soleras que conecta el diafragma de techo?"
  },
  {
    "id": "exam-sec-3-5-q049",
    "examId": "exam-sec-3-5",
    "questionNumber": 49,
    "questionText": "\u00bfEn que situaciones se recomienda el uso de conexiones de barra de cuerda?"
  },
  {
    "id": "exam-sec-3-5-q050",
    "examId": "exam-sec-3-5",
    "questionNumber": 50,
    "questionText": "\u00bfEn que caso se recomienda la sujeci\u00f3n del panel a la cimentaci\u00f3n?"
  },
  {
    "id": "exam-sec-3-5-q051",
    "examId": "exam-sec-3-5",
    "questionNumber": 51,
    "questionText": "Para que una conexi\u00f3n panel-zapata clasifique como muro alto debe poseer:"
  },
  {
    "id": "exam-sec-3-5-q052",
    "examId": "exam-sec-3-5",
    "questionNumber": 52,
    "questionText": "\u00bfQu\u00e9 tipo de resistencia utilizan las conexiones del panel a la losa de piso?"
  },
  {
    "id": "exam-sec-3-5-q053",
    "examId": "exam-sec-3-5",
    "questionNumber": 53,
    "questionText": "El refuerzo no es necesario en la franja trasera y en cualquier panel de losa requerido para proporcionar resistencia lateral."
  },
  {
    "id": "exam-sec-3-5-q054",
    "examId": "exam-sec-3-5",
    "questionNumber": 54,
    "questionText": "\u00bfCu\u00e1l es el factor mas importante al dise\u00f1ar las conexiones panel a panel?"
  },
  {
    "id": "exam-sec-3-5-q055",
    "examId": "exam-sec-3-5",
    "questionNumber": 55,
    "questionText": "\u00bfQue falla previenen las conexiones entre paneles?"
  },
  {
    "id": "exam-sec-3-5-q056",
    "examId": "exam-sec-3-5",
    "questionNumber": 56,
    "questionText": "Son las \u00e1reas de la losa entre el vaciado inicial de la losa y los paneles montados."
  },
  {
    "id": "exam-sec-3-5-q057",
    "examId": "exam-sec-3-5",
    "questionNumber": 57,
    "questionText": "\u00bfPor que es importante el relleno en las franjas de cierre?"
  },
  {
    "id": "exam-sec-3-5-q058",
    "examId": "exam-sec-3-5",
    "questionNumber": 58,
    "questionText": "Los agujeros que dejan las conexiones de los pernos para las riostras se llenan con agregado"
  },
  {
    "id": "exam-sec-3-5-q059",
    "examId": "exam-sec-3-5",
    "questionNumber": 59,
    "questionText": "\u00bfCual es el primer paso en la preparaci\u00f3n de la superficie?"
  },
  {
    "id": "exam-sec-3-5-q060",
    "examId": "exam-sec-3-5",
    "questionNumber": 60,
    "questionText": "Las aletas a lo largo de los bordes del panel y las franjas de molduras son bordes afilados"
  },
  {
    "id": "exam-sec-3-5-q061",
    "examId": "exam-sec-3-5",
    "questionNumber": 61,
    "questionText": "\u00bfCu\u00e1l es el material com\u00fan para resanado de las superficies exteriores?"
  },
  {
    "id": "exam-sec-3-5-q062",
    "examId": "exam-sec-3-5",
    "questionNumber": 62,
    "questionText": "El proceso del resanado de superficies comienza ______"
  },
  {
    "id": "exam-sec-3-5-q063",
    "examId": "exam-sec-3-5",
    "questionNumber": 63,
    "questionText": "\u00bfCon que prop\u00f3sito se calafatean las juntas de los paneles?"
  },
  {
    "id": "exam-sec-3-5-q064",
    "examId": "exam-sec-3-5",
    "questionNumber": 64,
    "questionText": "\u00bfCuales son los dos pasos principales en el calafateado de las juntas?"
  },
  {
    "id": "exam-sec-3-5-q065",
    "examId": "exam-sec-3-5",
    "questionNumber": 65,
    "questionText": "\u00bfCual es la diferencia entre una calefateado \n tipo S y M?"
  },
  {
    "id": "exam-sec-3-5-q066",
    "examId": "exam-sec-3-5",
    "questionNumber": 66,
    "questionText": "\u00bfCon que fin se coloca un cord\u00f3n de espuma en la junta?"
  },
  {
    "id": "exam-sec-3-5-q067",
    "examId": "exam-sec-3-5",
    "questionNumber": 67,
    "questionText": "El acabado de agregado expuesto consiste en raspar la superficie del panel alrededor del agregado dej\u00e1ndolo expuesto"
  },
  {
    "id": "exam-sec-3-5-q068",
    "examId": "exam-sec-3-5",
    "questionNumber": 68,
    "questionText": "Cuando se especifica una superficie de sopleteado mediano o pesado con arena, se recomienda que se use un retardador qu\u00edmico."
  },
  {
    "id": "exam-sec-3-5-q069",
    "examId": "exam-sec-3-5",
    "questionNumber": 69,
    "questionText": "\u00bfCual es la cantidad de material eliminado para lograr un acabado abujardado?"
  },
  {
    "id": "exam-sec-3-5-q070",
    "examId": "exam-sec-3-5",
    "questionNumber": 70,
    "questionText": "\u00bfCu\u00e1l es el nivel de pH del panel ideal para aplicar la pintura?"
  },
  {
    "id": "exam-sec-3-5-q071",
    "examId": "exam-sec-3-5",
    "questionNumber": 71,
    "questionText": "Es un material que absorbe humedad usado en interiores"
  },
  {
    "id": "exam-sec-3-5-q072",
    "examId": "exam-sec-3-5",
    "questionNumber": 72,
    "questionText": "Es el material base para sistemas de acabados exteriores"
  },
  {
    "id": "exam-sec-3-5-q073",
    "examId": "exam-sec-3-5",
    "questionNumber": 73,
    "questionText": "Las capas base se aplican sobre la malla seg\u00fan los requisitos del fabricante seguido por las capas de acabado pigmentadas."
  },
  {
    "id": "exam-sec-3-5-q074",
    "examId": "exam-sec-3-5",
    "questionNumber": 74,
    "questionText": "El agrietamiento en mapa se previene quitando el agua exudada en cuanto se forma y no demorando el curado."
  },
  {
    "id": "exam-sec-3-5-q075",
    "examId": "exam-sec-3-5",
    "questionNumber": 75,
    "questionText": "Para prevenir el agrietamiento ______ debe evitar colocarse cuando en velocidades de viento mayores a 8 km/h"
  },
  {
    "id": "exam-sec-3-5-q076",
    "examId": "exam-sec-3-5",
    "questionNumber": 76,
    "questionText": "Las grietas de este tama\u00f1o son inaceptables en un \u00e1rea de trafico"
  },
  {
    "id": "exam-sec-3-5-q077",
    "examId": "exam-sec-3-5",
    "questionNumber": 77,
    "questionText": "Las grietas de este tama\u00f1o indican una retracci\u00f3n desproporcionada"
  },
  {
    "id": "exam-sec-3-5-q078",
    "examId": "exam-sec-3-5",
    "questionNumber": 78,
    "questionText": "\u00bfCu\u00e1l son los factores que deben asegurarse para evitar la combadura?"
  },
  {
    "id": "exam-sec-3-5-q079",
    "examId": "exam-sec-3-5",
    "questionNumber": 79,
    "questionText": "Un remedio para la combadura es colocar peso de manera progresiva sobre la cavidad"
  },
  {
    "id": "exam-sec-3-5-q080",
    "examId": "exam-sec-3-5",
    "questionNumber": 80,
    "questionText": "El levantamiento de polvo se da por el exceso de hidrataci\u00f3n"
  },
  {
    "id": "exam-sec-3-5-q081",
    "examId": "exam-sec-3-5",
    "questionNumber": 81,
    "questionText": "Una buena calza y un suporte adecuado puede minimizar la alteraci\u00f3n de una junta por presiones del trafico"
  },
  {
    "id": "exam-sec-3-5-q082",
    "examId": "exam-sec-3-5",
    "questionNumber": 82,
    "questionText": "El _______ se da cuando se aplica el acabado antes de quitar el agua exudada"
  },
  {
    "id": "exam-sec-3-5-q083",
    "examId": "exam-sec-3-5",
    "questionNumber": 83,
    "questionText": "El movimiento de los paneles losa hasta su posici\u00f3n final puede rayar o raspar la superficie de la losa de piso, esto se conoce como:"
  },
  {
    "id": "exam-sec-3-5-q084",
    "examId": "exam-sec-3-5",
    "questionNumber": 84,
    "questionText": "\u00bfC\u00f3mo se repara una grieta en el panel?"
  },
  {
    "id": "exam-sec-3-5-q085",
    "examId": "exam-sec-3-5",
    "questionNumber": 85,
    "questionText": "\u00bfD\u00f3nde se coloca el refuerzo para evitar las grietas diagonales en las aberturas de un panel?"
  },
  {
    "id": "exam-sec-3-5-q086",
    "examId": "exam-sec-3-5",
    "questionNumber": 86,
    "questionText": "Es el resultado de contracci\u00f3n longitudinal cuando las almohadillas de montaje restringen el movimiento de los extremos del panel."
  },
  {
    "id": "exam-sec-3-5-q087",
    "examId": "exam-sec-3-5",
    "questionNumber": 87,
    "questionText": "Este tipo de agrietamiento parece ser m\u00e1s dominante en climas c\u00e1lidos"
  },
  {
    "id": "exam-sec-3-5-q088",
    "examId": "exam-sec-3-5",
    "questionNumber": 88,
    "questionText": "Este tipo de agrietamiento a menudo ocurren en las molduras debido al menor espesor"
  },
  {
    "id": "exam-sec-3-5-q089",
    "examId": "exam-sec-3-5",
    "questionNumber": 89,
    "questionText": "Estas grietas son bastante comunes y usualmente no son de importancia estructural."
  },
  {
    "id": "exam-sec-3-5-q090",
    "examId": "exam-sec-3-5",
    "questionNumber": 90,
    "questionText": "Si las grietas son demasiado grandes o son de una inquietud estructural, puede ser necesario rellenarlas con epoxi o un rellenador para juntas comparable"
  },
  {
    "id": "exam-sec-3-5-q091",
    "examId": "exam-sec-3-5",
    "questionNumber": 91,
    "questionText": "Las grietas grandes o estructurales de un ancho mayor a 0.33 mm usualmente pueden repararse con una inyecci\u00f3n a presi\u00f3n de epoxi estructural"
  },
  {
    "id": "exam-sec-3-5-q092",
    "examId": "exam-sec-3-5",
    "questionNumber": 92,
    "questionText": "Cuando sea posible, aplique compresi\u00f3n a la cara del lado de la grieta del panel para cerrar la grieta tanto como sea posible."
  },
  {
    "id": "exam-sec-3-5-q093",
    "examId": "exam-sec-3-5",
    "questionNumber": 93,
    "questionText": "Sirve para evitar parches oscuros en los paneles"
  },
  {
    "id": "exam-sec-3-5-q094",
    "examId": "exam-sec-3-5",
    "questionNumber": 94,
    "questionText": "El uso de ______ resuelve el asentamiento de la zapata"
  }
];

export const initialOptions: ExamQuestionOption[] = [
  {
    "id": "exam-sec-1-1-q001-A",
    "questionId": "exam-sec-1-1-q001",
    "optionLabel": "A",
    "optionText": "Como una t\u00e9cnica de construcci\u00f3n met\u00e1lica prefabricada.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q001-B",
    "questionId": "exam-sec-1-1-q001",
    "optionLabel": "B",
    "optionText": "Como una t\u00e9cnica para colar elementos de concreto verticalmente.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q001-C",
    "questionId": "exam-sec-1-1-q001",
    "optionLabel": "C",
    "optionText": "Como una t\u00e9cnica de ensamblaje de paneles transportados por carretera.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q001-D",
    "questionId": "exam-sec-1-1-q001",
    "optionLabel": "D",
    "optionText": "Como una t\u00e9cnica para colar elementos de concreto horizontalmente en el sitio y luego inclinarlos a su posici\u00f3n final.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q002-A",
    "questionId": "exam-sec-1-1-q002",
    "optionLabel": "A",
    "optionText": "No transfieren las cargas a la cimentaci\u00f3n.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q002-B",
    "questionId": "exam-sec-1-1-q002",
    "optionLabel": "B",
    "optionText": "Se construyen antes del diafragma de construcci\u00f3n estructural.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q002-C",
    "questionId": "exam-sec-1-1-q002",
    "optionLabel": "C",
    "optionText": "Generalmente se manipulan m\u00faltiples veces antes de su instalaci\u00f3n.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q002-D",
    "questionId": "exam-sec-1-1-q002",
    "optionLabel": "D",
    "optionText": "Son de tama\u00f1o y peso que s\u00f3lo permiten su construcci\u00f3n en el sitio.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q003-A",
    "questionId": "exam-sec-1-1-q003",
    "optionLabel": "A",
    "optionText": "Sustentabilidad y flexibilidad",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q003-B",
    "questionId": "exam-sec-1-1-q003",
    "optionLabel": "B",
    "optionText": "Resistencia al fuego y paisajismo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q003-C",
    "questionId": "exam-sec-1-1-q003",
    "optionLabel": "C",
    "optionText": "Sustentabilidad y paisajismo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q003-D",
    "questionId": "exam-sec-1-1-q003",
    "optionLabel": "D",
    "optionText": "Resistencia la fuego y flexibilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q004-A",
    "questionId": "exam-sec-1-1-q004",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q004-B",
    "questionId": "exam-sec-1-1-q004",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q005-A",
    "questionId": "exam-sec-1-1-q005",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q005-B",
    "questionId": "exam-sec-1-1-q005",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q006-A",
    "questionId": "exam-sec-1-1-q006",
    "optionLabel": "A",
    "optionText": "Colocar la cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q006-B",
    "questionId": "exam-sec-1-1-q006",
    "optionLabel": "B",
    "optionText": "Curar la losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q006-C",
    "questionId": "exam-sec-1-1-q006",
    "optionLabel": "C",
    "optionText": "Moldear los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q006-D",
    "questionId": "exam-sec-1-1-q006",
    "optionLabel": "D",
    "optionText": "Preparar la subrasante",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q007-A",
    "questionId": "exam-sec-1-1-q007",
    "optionLabel": "A",
    "optionText": "Preparar la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q007-B",
    "questionId": "exam-sec-1-1-q007",
    "optionLabel": "B",
    "optionText": "Moldear los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q007-C",
    "questionId": "exam-sec-1-1-q007",
    "optionLabel": "C",
    "optionText": "Colocar la cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q007-D",
    "questionId": "exam-sec-1-1-q007",
    "optionLabel": "D",
    "optionText": "Colocar lechada debajo de los paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q008-A",
    "questionId": "exam-sec-1-1-q008",
    "optionLabel": "A",
    "optionText": "Arriostrar los paneles de muros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q008-B",
    "questionId": "exam-sec-1-1-q008",
    "optionLabel": "B",
    "optionText": "Colocar una franja de cierre entre los muros exteriores y la losa de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q008-C",
    "questionId": "exam-sec-1-1-q008",
    "optionLabel": "C",
    "optionText": "Colar el techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q008-D",
    "questionId": "exam-sec-1-1-q008",
    "optionLabel": "D",
    "optionText": "Limpiar las caras de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q009-A",
    "questionId": "exam-sec-1-1-q009",
    "optionLabel": "A",
    "optionText": "Colar columnas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q009-B",
    "questionId": "exam-sec-1-1-q009",
    "optionLabel": "B",
    "optionText": "Aplicar tratamiento a las juntas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q009-C",
    "questionId": "exam-sec-1-1-q009",
    "optionLabel": "C",
    "optionText": "Resanar grietas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q009-D",
    "questionId": "exam-sec-1-1-q009",
    "optionLabel": "D",
    "optionText": "Colocar techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q010-A",
    "questionId": "exam-sec-1-1-q010",
    "optionLabel": "A",
    "optionText": "Aserrado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q010-B",
    "questionId": "exam-sec-1-1-q010",
    "optionLabel": "B",
    "optionText": "Arriostrado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q010-C",
    "questionId": "exam-sec-1-1-q010",
    "optionLabel": "C",
    "optionText": "Curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q010-D",
    "questionId": "exam-sec-1-1-q010",
    "optionLabel": "D",
    "optionText": "Sopleteado de arena",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q011-A",
    "questionId": "exam-sec-1-1-q011",
    "optionLabel": "A",
    "optionText": "5",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q011-B",
    "questionId": "exam-sec-1-1-q011",
    "optionLabel": "B",
    "optionText": "4",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q011-C",
    "questionId": "exam-sec-1-1-q011",
    "optionLabel": "C",
    "optionText": "6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q011-D",
    "questionId": "exam-sec-1-1-q011",
    "optionLabel": "D",
    "optionText": "2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q012-A",
    "questionId": "exam-sec-1-1-q012",
    "optionLabel": "A",
    "optionText": "Puzolanas naturales, cenizas voladoras y cementos escoria",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q012-B",
    "questionId": "exam-sec-1-1-q012",
    "optionLabel": "B",
    "optionText": "Endurecimiento r\u00e1pido",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q012-C",
    "questionId": "exam-sec-1-1-q012",
    "optionLabel": "C",
    "optionText": "De baja temperatura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q012-D",
    "questionId": "exam-sec-1-1-q012",
    "optionLabel": "D",
    "optionText": "Con resistencia a los sulfatos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q013-A",
    "questionId": "exam-sec-1-1-q013",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q013-B",
    "questionId": "exam-sec-1-1-q013",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q014-A",
    "questionId": "exam-sec-1-1-q014",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q014-B",
    "questionId": "exam-sec-1-1-q014",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q015-A",
    "questionId": "exam-sec-1-1-q015",
    "optionLabel": "A",
    "optionText": "0.7",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q015-B",
    "questionId": "exam-sec-1-1-q015",
    "optionLabel": "B",
    "optionText": "0.6",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q015-C",
    "questionId": "exam-sec-1-1-q015",
    "optionLabel": "C",
    "optionText": "0.8",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q015-D",
    "questionId": "exam-sec-1-1-q015",
    "optionLabel": "D",
    "optionText": "0.65",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q016-A",
    "questionId": "exam-sec-1-1-q016",
    "optionLabel": "A",
    "optionText": "Aditivo mineral",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q016-B",
    "questionId": "exam-sec-1-1-q016",
    "optionLabel": "B",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q016-C",
    "questionId": "exam-sec-1-1-q016",
    "optionLabel": "C",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q016-D",
    "questionId": "exam-sec-1-1-q016",
    "optionLabel": "D",
    "optionText": "Superplastificantes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q017-A",
    "questionId": "exam-sec-1-1-q017",
    "optionLabel": "A",
    "optionText": "Superplastificantes",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q017-B",
    "questionId": "exam-sec-1-1-q017",
    "optionLabel": "B",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q017-C",
    "questionId": "exam-sec-1-1-q017",
    "optionLabel": "C",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q017-D",
    "questionId": "exam-sec-1-1-q017",
    "optionLabel": "D",
    "optionText": "Aditivo mineral",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q018-A",
    "questionId": "exam-sec-1-1-q018",
    "optionLabel": "A",
    "optionText": "Superplastificantes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q018-B",
    "questionId": "exam-sec-1-1-q018",
    "optionLabel": "B",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q018-C",
    "questionId": "exam-sec-1-1-q018",
    "optionLabel": "C",
    "optionText": "Aditivo mineral",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q018-D",
    "questionId": "exam-sec-1-1-q018",
    "optionLabel": "D",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q019-A",
    "questionId": "exam-sec-1-1-q019",
    "optionLabel": "A",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q019-B",
    "questionId": "exam-sec-1-1-q019",
    "optionLabel": "B",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q019-C",
    "questionId": "exam-sec-1-1-q019",
    "optionLabel": "C",
    "optionText": "Superplastificantes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q019-D",
    "questionId": "exam-sec-1-1-q019",
    "optionLabel": "D",
    "optionText": "Aditivo mineral",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q020-A",
    "questionId": "exam-sec-1-1-q020",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q020-B",
    "questionId": "exam-sec-1-1-q020",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q021-A",
    "questionId": "exam-sec-1-1-q021",
    "optionLabel": "A",
    "optionText": "24 MPa",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q021-B",
    "questionId": "exam-sec-1-1-q021",
    "optionLabel": "B",
    "optionText": "31 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q021-C",
    "questionId": "exam-sec-1-1-q021",
    "optionLabel": "C",
    "optionText": "20 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q021-D",
    "questionId": "exam-sec-1-1-q021",
    "optionLabel": "D",
    "optionText": "25 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q022-A",
    "questionId": "exam-sec-1-1-q022",
    "optionLabel": "A",
    "optionText": "14 MPa",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q022-B",
    "questionId": "exam-sec-1-1-q022",
    "optionLabel": "B",
    "optionText": "16 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q022-C",
    "questionId": "exam-sec-1-1-q022",
    "optionLabel": "C",
    "optionText": "12 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q022-D",
    "questionId": "exam-sec-1-1-q022",
    "optionLabel": "D",
    "optionText": "13 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q023-A",
    "questionId": "exam-sec-1-1-q023",
    "optionLabel": "A",
    "optionText": "35 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q023-B",
    "questionId": "exam-sec-1-1-q023",
    "optionLabel": "B",
    "optionText": "38 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q023-C",
    "questionId": "exam-sec-1-1-q023",
    "optionLabel": "C",
    "optionText": "40 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q023-D",
    "questionId": "exam-sec-1-1-q023",
    "optionLabel": "D",
    "optionText": "32 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q024-A",
    "questionId": "exam-sec-1-1-q024",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q024-B",
    "questionId": "exam-sec-1-1-q024",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q025-A",
    "questionId": "exam-sec-1-1-q025",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q025-B",
    "questionId": "exam-sec-1-1-q025",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q026-A",
    "questionId": "exam-sec-1-1-q026",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q026-B",
    "questionId": "exam-sec-1-1-q026",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q027-A",
    "questionId": "exam-sec-1-1-q027",
    "optionLabel": "A",
    "optionText": "Menor que No. 5 o No. 6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q027-B",
    "questionId": "exam-sec-1-1-q027",
    "optionLabel": "B",
    "optionText": "Mayor que No. 5 o No. 6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q027-C",
    "questionId": "exam-sec-1-1-q027",
    "optionLabel": "C",
    "optionText": "Mayor que No. 7 o No. 8",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q027-D",
    "questionId": "exam-sec-1-1-q027",
    "optionLabel": "D",
    "optionText": "Menor que No. 7 o No. 8",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q028-A",
    "questionId": "exam-sec-1-1-q028",
    "optionLabel": "A",
    "optionText": "0.71 cm\u00b2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q028-B",
    "questionId": "exam-sec-1-1-q028",
    "optionLabel": "B",
    "optionText": "1.29 cm\u00b2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q028-C",
    "questionId": "exam-sec-1-1-q028",
    "optionLabel": "C",
    "optionText": "1.99 cm\u00b2",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q028-D",
    "questionId": "exam-sec-1-1-q028",
    "optionLabel": "D",
    "optionText": "2.84 cm\u00b2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q029-A",
    "questionId": "exam-sec-1-1-q029",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q029-B",
    "questionId": "exam-sec-1-1-q029",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q030-A",
    "questionId": "exam-sec-1-1-q030",
    "optionLabel": "A",
    "optionText": "Del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q030-B",
    "questionId": "exam-sec-1-1-q030",
    "optionLabel": "B",
    "optionText": "De los trabajadores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q030-C",
    "questionId": "exam-sec-1-1-q030",
    "optionLabel": "C",
    "optionText": "Del refuerzo de acero y los trabajadores durante la colocaci\u00f3n del concreto",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q030-D",
    "questionId": "exam-sec-1-1-q030",
    "optionLabel": "D",
    "optionText": "Del acero de refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q031-A",
    "questionId": "exam-sec-1-1-q031",
    "optionLabel": "A",
    "optionText": "Acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q031-B",
    "questionId": "exam-sec-1-1-q031",
    "optionLabel": "B",
    "optionText": "Aluminio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q031-C",
    "questionId": "exam-sec-1-1-q031",
    "optionLabel": "C",
    "optionText": "Madera",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q031-D",
    "questionId": "exam-sec-1-1-q031",
    "optionLabel": "D",
    "optionText": "Poliestireno",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q032-A",
    "questionId": "exam-sec-1-1-q032",
    "optionLabel": "A",
    "optionText": "Qu\u00edmicamente activos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q032-B",
    "questionId": "exam-sec-1-1-q032",
    "optionLabel": "B",
    "optionText": "Qu\u00edmicamente inactivos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q032-C",
    "questionId": "exam-sec-1-1-q032",
    "optionLabel": "C",
    "optionText": "Solventes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q032-D",
    "questionId": "exam-sec-1-1-q032",
    "optionLabel": "D",
    "optionText": "A base de cera",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q033-A",
    "questionId": "exam-sec-1-1-q033",
    "optionLabel": "A",
    "optionText": "De bode a borde, de abajo a arriba",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q033-B",
    "questionId": "exam-sec-1-1-q033",
    "optionLabel": "B",
    "optionText": "De bode a borde, de arriba a abajo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q033-C",
    "questionId": "exam-sec-1-1-q033",
    "optionLabel": "C",
    "optionText": "De arriba abajo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q033-D",
    "questionId": "exam-sec-1-1-q033",
    "optionLabel": "D",
    "optionText": "De bode a borde",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q034-A",
    "questionId": "exam-sec-1-1-q034",
    "optionLabel": "A",
    "optionText": "11 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q034-B",
    "questionId": "exam-sec-1-1-q034",
    "optionLabel": "B",
    "optionText": "15 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q034-C",
    "questionId": "exam-sec-1-1-q034",
    "optionLabel": "C",
    "optionText": "13 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q034-D",
    "questionId": "exam-sec-1-1-q034",
    "optionLabel": "D",
    "optionText": "12 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q035-A",
    "questionId": "exam-sec-1-1-q035",
    "optionLabel": "A",
    "optionText": "Revenimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q035-B",
    "questionId": "exam-sec-1-1-q035",
    "optionLabel": "B",
    "optionText": "Resistencia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q035-C",
    "questionId": "exam-sec-1-1-q035",
    "optionLabel": "C",
    "optionText": "Refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q035-D",
    "questionId": "exam-sec-1-1-q035",
    "optionLabel": "D",
    "optionText": "Tiempo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q036-A",
    "questionId": "exam-sec-1-1-q036",
    "optionLabel": "A",
    "optionText": "Tiempo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q036-B",
    "questionId": "exam-sec-1-1-q036",
    "optionLabel": "B",
    "optionText": "Temperatura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q036-C",
    "questionId": "exam-sec-1-1-q036",
    "optionLabel": "C",
    "optionText": "Humedad",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q036-D",
    "questionId": "exam-sec-1-1-q036",
    "optionLabel": "D",
    "optionText": "Presi\u00f3n atmosf\u00e9rica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q037-A",
    "questionId": "exam-sec-1-1-q037",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q037-B",
    "questionId": "exam-sec-1-1-q037",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q038-A",
    "questionId": "exam-sec-1-1-q038",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q038-B",
    "questionId": "exam-sec-1-1-q038",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q039-A",
    "questionId": "exam-sec-1-1-q039",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q039-B",
    "questionId": "exam-sec-1-1-q039",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q040-A",
    "questionId": "exam-sec-1-1-q040",
    "optionLabel": "A",
    "optionText": "35 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q040-B",
    "questionId": "exam-sec-1-1-q040",
    "optionLabel": "B",
    "optionText": "85 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q040-C",
    "questionId": "exam-sec-1-1-q040",
    "optionLabel": "C",
    "optionText": "50 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q040-D",
    "questionId": "exam-sec-1-1-q040",
    "optionLabel": "D",
    "optionText": "29 \u00b0C",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q041-A",
    "questionId": "exam-sec-1-1-q041",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q041-B",
    "questionId": "exam-sec-1-1-q041",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q042-A",
    "questionId": "exam-sec-1-1-q042",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q042-B",
    "questionId": "exam-sec-1-1-q042",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q043-A",
    "questionId": "exam-sec-1-1-q043",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q043-B",
    "questionId": "exam-sec-1-1-q043",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q044-A",
    "questionId": "exam-sec-1-1-q044",
    "optionLabel": "A",
    "optionText": "5 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q044-B",
    "questionId": "exam-sec-1-1-q044",
    "optionLabel": "B",
    "optionText": "2 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q044-C",
    "questionId": "exam-sec-1-1-q044",
    "optionLabel": "C",
    "optionText": "3 d\u00edas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q044-D",
    "questionId": "exam-sec-1-1-q044",
    "optionLabel": "D",
    "optionText": "4 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q045-A",
    "questionId": "exam-sec-1-1-q045",
    "optionLabel": "A",
    "optionText": "-5.6 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q045-B",
    "questionId": "exam-sec-1-1-q045",
    "optionLabel": "B",
    "optionText": "22.3 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q045-C",
    "questionId": "exam-sec-1-1-q045",
    "optionLabel": "C",
    "optionText": "10.11 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q045-D",
    "questionId": "exam-sec-1-1-q045",
    "optionLabel": "D",
    "optionText": "6.5 \u00b0C",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q046-A",
    "questionId": "exam-sec-1-1-q046",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q046-B",
    "questionId": "exam-sec-1-1-q046",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q047-A",
    "questionId": "exam-sec-1-1-q047",
    "optionLabel": "A",
    "optionText": "Tipo de concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q047-B",
    "questionId": "exam-sec-1-1-q047",
    "optionLabel": "B",
    "optionText": "Tama\u00f1o de panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q047-C",
    "questionId": "exam-sec-1-1-q047",
    "optionLabel": "C",
    "optionText": "Aditivos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q047-D",
    "questionId": "exam-sec-1-1-q047",
    "optionLabel": "D",
    "optionText": "Tipo de refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q048-A",
    "questionId": "exam-sec-1-1-q048",
    "optionLabel": "A",
    "optionText": "Revenimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q048-B",
    "questionId": "exam-sec-1-1-q048",
    "optionLabel": "B",
    "optionText": "Tipo de riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q048-C",
    "questionId": "exam-sec-1-1-q048",
    "optionLabel": "C",
    "optionText": "Criterios que afectan la selecci\u00f3n de la gr\u00faa",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q048-D",
    "questionId": "exam-sec-1-1-q048",
    "optionLabel": "D",
    "optionText": "Tiempo de curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q049-A",
    "questionId": "exam-sec-1-1-q049",
    "optionLabel": "A",
    "optionText": "Detallado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q049-B",
    "questionId": "exam-sec-1-1-q049",
    "optionLabel": "B",
    "optionText": "Planos de taller",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q049-C",
    "questionId": "exam-sec-1-1-q049",
    "optionLabel": "C",
    "optionText": "Planos de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q049-D",
    "questionId": "exam-sec-1-1-q049",
    "optionLabel": "D",
    "optionText": "Manual de montaje",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q050-A",
    "questionId": "exam-sec-1-1-q050",
    "optionLabel": "A",
    "optionText": "Detallado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q050-B",
    "questionId": "exam-sec-1-1-q050",
    "optionLabel": "B",
    "optionText": "Planos de taller",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q050-C",
    "questionId": "exam-sec-1-1-q050",
    "optionLabel": "C",
    "optionText": "Planos de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q050-D",
    "questionId": "exam-sec-1-1-q050",
    "optionLabel": "D",
    "optionText": "Manual de montaje",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q051-A",
    "questionId": "exam-sec-1-1-q051",
    "optionLabel": "A",
    "optionText": "De torsi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q051-B",
    "questionId": "exam-sec-1-1-q051",
    "optionLabel": "B",
    "optionText": "De compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q051-C",
    "questionId": "exam-sec-1-1-q051",
    "optionLabel": "C",
    "optionText": "Paralelas al plano, verticales y laterales",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q051-D",
    "questionId": "exam-sec-1-1-q051",
    "optionLabel": "D",
    "optionText": "Horizontales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q052-A",
    "questionId": "exam-sec-1-1-q052",
    "optionLabel": "A",
    "optionText": "Raz\u00f3n H/T",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q052-B",
    "questionId": "exam-sec-1-1-q052",
    "optionLabel": "B",
    "optionText": "Raz\u00f3n S/T",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q052-C",
    "questionId": "exam-sec-1-1-q052",
    "optionLabel": "C",
    "optionText": "Raz\u00f3n H/S",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q052-D",
    "questionId": "exam-sec-1-1-q052",
    "optionLabel": "D",
    "optionText": "Raz\u00f3n R/S",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q053-A",
    "questionId": "exam-sec-1-1-q053",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q053-B",
    "questionId": "exam-sec-1-1-q053",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q054-A",
    "questionId": "exam-sec-1-1-q054",
    "optionLabel": "A",
    "optionText": "Determinar como se colocara la cimbra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q054-B",
    "questionId": "exam-sec-1-1-q054",
    "optionLabel": "B",
    "optionText": "Determinar como se colaran los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q054-C",
    "questionId": "exam-sec-1-1-q054",
    "optionLabel": "C",
    "optionText": "Determinar como se dividir\u00e1n los muros en paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q054-D",
    "questionId": "exam-sec-1-1-q054",
    "optionLabel": "D",
    "optionText": "Determinar como se colocaran los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q055-A",
    "questionId": "exam-sec-1-1-q055",
    "optionLabel": "A",
    "optionText": "11.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q055-B",
    "questionId": "exam-sec-1-1-q055",
    "optionLabel": "B",
    "optionText": "13.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q055-C",
    "questionId": "exam-sec-1-1-q055",
    "optionLabel": "C",
    "optionText": "15 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q055-D",
    "questionId": "exam-sec-1-1-q055",
    "optionLabel": "D",
    "optionText": "12.2 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q056-A",
    "questionId": "exam-sec-1-1-q056",
    "optionLabel": "A",
    "optionText": "1.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q056-B",
    "questionId": "exam-sec-1-1-q056",
    "optionLabel": "B",
    "optionText": "0.45 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q056-C",
    "questionId": "exam-sec-1-1-q056",
    "optionLabel": "C",
    "optionText": "0.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q056-D",
    "questionId": "exam-sec-1-1-q056",
    "optionLabel": "D",
    "optionText": "1.85 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q057-A",
    "questionId": "exam-sec-1-1-q057",
    "optionLabel": "A",
    "optionText": "La capacidad de la gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q057-B",
    "questionId": "exam-sec-1-1-q057",
    "optionLabel": "B",
    "optionText": "Su peso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q057-C",
    "questionId": "exam-sec-1-1-q057",
    "optionLabel": "C",
    "optionText": "El presupuesto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q057-D",
    "questionId": "exam-sec-1-1-q057",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q058-A",
    "questionId": "exam-sec-1-1-q058",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q058-B",
    "questionId": "exam-sec-1-1-q058",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q059-A",
    "questionId": "exam-sec-1-1-q059",
    "optionLabel": "A",
    "optionText": "Que se cole en el plano horizontal",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q059-B",
    "questionId": "exam-sec-1-1-q059",
    "optionLabel": "B",
    "optionText": "Que no este en los planos de taller",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q059-C",
    "questionId": "exam-sec-1-1-q059",
    "optionLabel": "C",
    "optionText": "Que su refuerzo sea de malla",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q059-D",
    "questionId": "exam-sec-1-1-q059",
    "optionLabel": "D",
    "optionText": "Que se desvi\u00e9 de una figura rectil\u00ednea",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q060-A",
    "questionId": "exam-sec-1-1-q060",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q060-B",
    "questionId": "exam-sec-1-1-q060",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q061-A",
    "questionId": "exam-sec-1-1-q061",
    "optionLabel": "A",
    "optionText": "Acceso al sitio y circulaci\u00f3n de la gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q061-B",
    "questionId": "exam-sec-1-1-q061",
    "optionLabel": "B",
    "optionText": "Tama\u00f1os y pesos de paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q061-C",
    "questionId": "exam-sec-1-1-q061",
    "optionLabel": "C",
    "optionText": "Tipos y capacidades de las gr\u00faas disponibles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q061-D",
    "questionId": "exam-sec-1-1-q061",
    "optionLabel": "D",
    "optionText": "Muestra donde se cimbrar\u00e1n, su posici\u00f3n final  y sus secuencias de colado y montaje.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q062-A",
    "questionId": "exam-sec-1-1-q062",
    "optionLabel": "A",
    "optionText": "0.2",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q062-B",
    "questionId": "exam-sec-1-1-q062",
    "optionLabel": "B",
    "optionText": "0.4",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q062-C",
    "questionId": "exam-sec-1-1-q062",
    "optionLabel": "C",
    "optionText": "0.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q062-D",
    "questionId": "exam-sec-1-1-q062",
    "optionLabel": "D",
    "optionText": "0.35",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q063-A",
    "questionId": "exam-sec-1-1-q063",
    "optionLabel": "A",
    "optionText": "El peso de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q063-B",
    "questionId": "exam-sec-1-1-q063",
    "optionLabel": "B",
    "optionText": "La maniobrabilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q063-C",
    "questionId": "exam-sec-1-1-q063",
    "optionLabel": "C",
    "optionText": "La franja de cierre",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q063-D",
    "questionId": "exam-sec-1-1-q063",
    "optionLabel": "D",
    "optionText": "El tipo de suelo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q064-A",
    "questionId": "exam-sec-1-1-q064",
    "optionLabel": "A",
    "optionText": "Pluma de celos\u00eda montada en cami\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q064-B",
    "questionId": "exam-sec-1-1-q064",
    "optionLabel": "B",
    "optionText": "Pluma de celos\u00eda montada en rieles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q064-C",
    "questionId": "exam-sec-1-1-q064",
    "optionLabel": "C",
    "optionText": "Pluma hidr\u00e1ulica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q064-D",
    "questionId": "exam-sec-1-1-q064",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q065-A",
    "questionId": "exam-sec-1-1-q065",
    "optionLabel": "A",
    "optionText": "Tipo y capacidad de la gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q065-B",
    "questionId": "exam-sec-1-1-q065",
    "optionLabel": "B",
    "optionText": "Potencial de da\u00f1ar la losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q065-C",
    "questionId": "exam-sec-1-1-q065",
    "optionLabel": "C",
    "optionText": "Accesibilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q065-D",
    "questionId": "exam-sec-1-1-q065",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q066-A",
    "questionId": "exam-sec-1-1-q066",
    "optionLabel": "A",
    "optionText": "Distancia que la gr\u00faa transporta al panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q066-B",
    "questionId": "exam-sec-1-1-q066",
    "optionLabel": "B",
    "optionText": "El tipo de suelo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q066-C",
    "questionId": "exam-sec-1-1-q066",
    "optionLabel": "C",
    "optionText": "El numero de paneles que se colocara",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q066-D",
    "questionId": "exam-sec-1-1-q066",
    "optionLabel": "D",
    "optionText": "El acabado de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q067-A",
    "questionId": "exam-sec-1-1-q067",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q067-B",
    "questionId": "exam-sec-1-1-q067",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q068-A",
    "questionId": "exam-sec-1-1-q068",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q068-B",
    "questionId": "exam-sec-1-1-q068",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q069-A",
    "questionId": "exam-sec-1-1-q069",
    "optionLabel": "A",
    "optionText": "Pulido",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q069-B",
    "questionId": "exam-sec-1-1-q069",
    "optionLabel": "B",
    "optionText": "Raspado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q069-C",
    "questionId": "exam-sec-1-1-q069",
    "optionLabel": "C",
    "optionText": "Agregado expuesto",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q069-D",
    "questionId": "exam-sec-1-1-q069",
    "optionLabel": "D",
    "optionText": "Moldeado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q070-A",
    "questionId": "exam-sec-1-1-q070",
    "optionLabel": "A",
    "optionText": "Insertos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q070-B",
    "questionId": "exam-sec-1-1-q070",
    "optionLabel": "B",
    "optionText": "Curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q070-C",
    "questionId": "exam-sec-1-1-q070",
    "optionLabel": "C",
    "optionText": "Recubrimiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q070-D",
    "questionId": "exam-sec-1-1-q070",
    "optionLabel": "D",
    "optionText": "Acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q071-A",
    "questionId": "exam-sec-1-1-q071",
    "optionLabel": "A",
    "optionText": "Desempe\u00f1o t\u00e9rmico de los paneles de muro",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q071-B",
    "questionId": "exam-sec-1-1-q071",
    "optionLabel": "B",
    "optionText": "La altura sin soporte",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q071-C",
    "questionId": "exam-sec-1-1-q071",
    "optionLabel": "C",
    "optionText": "El revenimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q071-D",
    "questionId": "exam-sec-1-1-q071",
    "optionLabel": "D",
    "optionText": "La resistencia contra incendios",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q072-A",
    "questionId": "exam-sec-1-1-q072",
    "optionLabel": "A",
    "optionText": "NTC 111",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q072-B",
    "questionId": "exam-sec-1-1-q072",
    "optionLabel": "B",
    "optionText": "ASTM C270",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q072-C",
    "questionId": "exam-sec-1-1-q072",
    "optionLabel": "C",
    "optionText": "ACI 318",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q072-D",
    "questionId": "exam-sec-1-1-q072",
    "optionLabel": "D",
    "optionText": "IECC",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q073-A",
    "questionId": "exam-sec-1-1-q073",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q073-B",
    "questionId": "exam-sec-1-1-q073",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q074-A",
    "questionId": "exam-sec-1-1-q074",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q074-B",
    "questionId": "exam-sec-1-1-q074",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q075-A",
    "questionId": "exam-sec-1-1-q075",
    "optionLabel": "A",
    "optionText": "Sistemas de aislamiento Steelfoam Techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q075-B",
    "questionId": "exam-sec-1-1-q075",
    "optionLabel": "B",
    "optionText": "Sistemas de aislamiento Concreto aislante ligero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q075-C",
    "questionId": "exam-sec-1-1-q075",
    "optionLabel": "C",
    "optionText": "Sistemas de aislamiento con poliuretano",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q075-D",
    "questionId": "exam-sec-1-1-q075",
    "optionLabel": "D",
    "optionText": "Sistemas de aislamiento integralmente colados.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q076-A",
    "questionId": "exam-sec-1-1-q076",
    "optionLabel": "A",
    "optionText": "En dos capas de concreto separadas por una capa de aislamiento r\u00edgido",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q076-B",
    "questionId": "exam-sec-1-1-q076",
    "optionLabel": "B",
    "optionText": "En dos capas de concreto separadas por una capa de refuerzo de acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q076-C",
    "questionId": "exam-sec-1-1-q076",
    "optionLabel": "C",
    "optionText": "En dos capas de concreto separadas por una capa madera",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q076-D",
    "questionId": "exam-sec-1-1-q076",
    "optionLabel": "D",
    "optionText": "En dos capas de concreto separadas por una capa de tabla roca",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q077-A",
    "questionId": "exam-sec-1-1-q077",
    "optionLabel": "A",
    "optionText": "Vinilo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q077-B",
    "questionId": "exam-sec-1-1-q077",
    "optionLabel": "B",
    "optionText": "Madera aligerada",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q077-C",
    "questionId": "exam-sec-1-1-q077",
    "optionLabel": "C",
    "optionText": "Poliisocianurato",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q077-D",
    "questionId": "exam-sec-1-1-q077",
    "optionLabel": "D",
    "optionText": "Poliestireno",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q078-A",
    "questionId": "exam-sec-1-1-q078",
    "optionLabel": "A",
    "optionText": "Paneles compuestos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q078-B",
    "questionId": "exam-sec-1-1-q078",
    "optionLabel": "B",
    "optionText": "Paneles parcialmente compuestos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-1-q078-C",
    "questionId": "exam-sec-1-1-q078",
    "optionLabel": "C",
    "optionText": "Muros de media asta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q078-D",
    "questionId": "exam-sec-1-1-q078",
    "optionLabel": "D",
    "optionText": "Muros repaldados",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q079-A",
    "questionId": "exam-sec-1-1-q079",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-1-q079-B",
    "questionId": "exam-sec-1-1-q079",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q001-A",
    "questionId": "exam-sec-1-5-q001",
    "optionLabel": "A",
    "optionText": "Como una t\u00e9cnica de construcci\u00f3n met\u00e1lica prefabricada.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q001-B",
    "questionId": "exam-sec-1-5-q001",
    "optionLabel": "B",
    "optionText": "Como una t\u00e9cnica para colar elementos de concreto verticalmente.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q001-C",
    "questionId": "exam-sec-1-5-q001",
    "optionLabel": "C",
    "optionText": "Como una t\u00e9cnica de ensamblaje de paneles transportados por carretera.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q001-D",
    "questionId": "exam-sec-1-5-q001",
    "optionLabel": "D",
    "optionText": "Como una t\u00e9cnica para colar elementos de concreto horizontalmente en el sitio y luego inclinarlos a su posici\u00f3n final.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q002-A",
    "questionId": "exam-sec-1-5-q002",
    "optionLabel": "A",
    "optionText": "No transfieren las cargas a la cimentaci\u00f3n.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q002-B",
    "questionId": "exam-sec-1-5-q002",
    "optionLabel": "B",
    "optionText": "Se construyen antes del diafragma de construcci\u00f3n estructural.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q002-C",
    "questionId": "exam-sec-1-5-q002",
    "optionLabel": "C",
    "optionText": "Generalmente se manipulan m\u00faltiples veces antes de su instalaci\u00f3n.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q002-D",
    "questionId": "exam-sec-1-5-q002",
    "optionLabel": "D",
    "optionText": "Son de tama\u00f1o y peso que s\u00f3lo permiten su construcci\u00f3n en el sitio.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q003-A",
    "questionId": "exam-sec-1-5-q003",
    "optionLabel": "A",
    "optionText": "Sustentabilidad y flexibilidad",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q003-B",
    "questionId": "exam-sec-1-5-q003",
    "optionLabel": "B",
    "optionText": "Resistencia al fuego y paisajismo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q003-C",
    "questionId": "exam-sec-1-5-q003",
    "optionLabel": "C",
    "optionText": "Sustentabilidad y paisajismo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q003-D",
    "questionId": "exam-sec-1-5-q003",
    "optionLabel": "D",
    "optionText": "Resistencia la fuego y flexibilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q004-A",
    "questionId": "exam-sec-1-5-q004",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q004-B",
    "questionId": "exam-sec-1-5-q004",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q005-A",
    "questionId": "exam-sec-1-5-q005",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q005-B",
    "questionId": "exam-sec-1-5-q005",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q006-A",
    "questionId": "exam-sec-1-5-q006",
    "optionLabel": "A",
    "optionText": "Colocar la cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q006-B",
    "questionId": "exam-sec-1-5-q006",
    "optionLabel": "B",
    "optionText": "Curar la losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q006-C",
    "questionId": "exam-sec-1-5-q006",
    "optionLabel": "C",
    "optionText": "Moldear los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q006-D",
    "questionId": "exam-sec-1-5-q006",
    "optionLabel": "D",
    "optionText": "Preparar la subrasante",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q007-A",
    "questionId": "exam-sec-1-5-q007",
    "optionLabel": "A",
    "optionText": "Preparar la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q007-B",
    "questionId": "exam-sec-1-5-q007",
    "optionLabel": "B",
    "optionText": "Moldear los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q007-C",
    "questionId": "exam-sec-1-5-q007",
    "optionLabel": "C",
    "optionText": "Colocar la cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q007-D",
    "questionId": "exam-sec-1-5-q007",
    "optionLabel": "D",
    "optionText": "Colocar lechada debajo de los paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q008-A",
    "questionId": "exam-sec-1-5-q008",
    "optionLabel": "A",
    "optionText": "Arriostrar los paneles de muros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q008-B",
    "questionId": "exam-sec-1-5-q008",
    "optionLabel": "B",
    "optionText": "Colocar una franja de cierre entre los muros exteriores y la losa de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q008-C",
    "questionId": "exam-sec-1-5-q008",
    "optionLabel": "C",
    "optionText": "Colar el techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q008-D",
    "questionId": "exam-sec-1-5-q008",
    "optionLabel": "D",
    "optionText": "Limpiar las caras de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q009-A",
    "questionId": "exam-sec-1-5-q009",
    "optionLabel": "A",
    "optionText": "Colar columnas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q009-B",
    "questionId": "exam-sec-1-5-q009",
    "optionLabel": "B",
    "optionText": "Aplicar tratamiento a las juntas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q009-C",
    "questionId": "exam-sec-1-5-q009",
    "optionLabel": "C",
    "optionText": "Resanar grietas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q009-D",
    "questionId": "exam-sec-1-5-q009",
    "optionLabel": "D",
    "optionText": "Colocar techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q010-A",
    "questionId": "exam-sec-1-5-q010",
    "optionLabel": "A",
    "optionText": "Aserrado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q010-B",
    "questionId": "exam-sec-1-5-q010",
    "optionLabel": "B",
    "optionText": "Arriostrado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q010-C",
    "questionId": "exam-sec-1-5-q010",
    "optionLabel": "C",
    "optionText": "Curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q010-D",
    "questionId": "exam-sec-1-5-q010",
    "optionLabel": "D",
    "optionText": "Sopleteado de arena",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q011-A",
    "questionId": "exam-sec-1-5-q011",
    "optionLabel": "A",
    "optionText": "5",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q011-B",
    "questionId": "exam-sec-1-5-q011",
    "optionLabel": "B",
    "optionText": "4",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q011-C",
    "questionId": "exam-sec-1-5-q011",
    "optionLabel": "C",
    "optionText": "6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q011-D",
    "questionId": "exam-sec-1-5-q011",
    "optionLabel": "D",
    "optionText": "2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q012-A",
    "questionId": "exam-sec-1-5-q012",
    "optionLabel": "A",
    "optionText": "Puzolanas naturales, cenizas voladoras y cementos escoria",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q012-B",
    "questionId": "exam-sec-1-5-q012",
    "optionLabel": "B",
    "optionText": "Endurecimiento r\u00e1pido",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q012-C",
    "questionId": "exam-sec-1-5-q012",
    "optionLabel": "C",
    "optionText": "De baja temperatura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q012-D",
    "questionId": "exam-sec-1-5-q012",
    "optionLabel": "D",
    "optionText": "Con resistencia a los sulfatos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q013-A",
    "questionId": "exam-sec-1-5-q013",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q013-B",
    "questionId": "exam-sec-1-5-q013",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q014-A",
    "questionId": "exam-sec-1-5-q014",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q014-B",
    "questionId": "exam-sec-1-5-q014",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q015-A",
    "questionId": "exam-sec-1-5-q015",
    "optionLabel": "A",
    "optionText": "0.7",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q015-B",
    "questionId": "exam-sec-1-5-q015",
    "optionLabel": "B",
    "optionText": "0.6",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q015-C",
    "questionId": "exam-sec-1-5-q015",
    "optionLabel": "C",
    "optionText": "0.8",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q015-D",
    "questionId": "exam-sec-1-5-q015",
    "optionLabel": "D",
    "optionText": "0.65",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q016-A",
    "questionId": "exam-sec-1-5-q016",
    "optionLabel": "A",
    "optionText": "Aditivo mineral",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q016-B",
    "questionId": "exam-sec-1-5-q016",
    "optionLabel": "B",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q016-C",
    "questionId": "exam-sec-1-5-q016",
    "optionLabel": "C",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q016-D",
    "questionId": "exam-sec-1-5-q016",
    "optionLabel": "D",
    "optionText": "Superplastificantes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q017-A",
    "questionId": "exam-sec-1-5-q017",
    "optionLabel": "A",
    "optionText": "Superplastificantes",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q017-B",
    "questionId": "exam-sec-1-5-q017",
    "optionLabel": "B",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q017-C",
    "questionId": "exam-sec-1-5-q017",
    "optionLabel": "C",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q017-D",
    "questionId": "exam-sec-1-5-q017",
    "optionLabel": "D",
    "optionText": "Aditivo mineral",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q018-A",
    "questionId": "exam-sec-1-5-q018",
    "optionLabel": "A",
    "optionText": "Superplastificantes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q018-B",
    "questionId": "exam-sec-1-5-q018",
    "optionLabel": "B",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q018-C",
    "questionId": "exam-sec-1-5-q018",
    "optionLabel": "C",
    "optionText": "Aditivo mineral",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q018-D",
    "questionId": "exam-sec-1-5-q018",
    "optionLabel": "D",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q019-A",
    "questionId": "exam-sec-1-5-q019",
    "optionLabel": "A",
    "optionText": "Aditivos de aceleraci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q019-B",
    "questionId": "exam-sec-1-5-q019",
    "optionLabel": "B",
    "optionText": "Aditivos de aire incorporado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q019-C",
    "questionId": "exam-sec-1-5-q019",
    "optionLabel": "C",
    "optionText": "Superplastificantes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q019-D",
    "questionId": "exam-sec-1-5-q019",
    "optionLabel": "D",
    "optionText": "Aditivo mineral",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q020-A",
    "questionId": "exam-sec-1-5-q020",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q020-B",
    "questionId": "exam-sec-1-5-q020",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q021-A",
    "questionId": "exam-sec-1-5-q021",
    "optionLabel": "A",
    "optionText": "24 MPa",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q021-B",
    "questionId": "exam-sec-1-5-q021",
    "optionLabel": "B",
    "optionText": "31 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q021-C",
    "questionId": "exam-sec-1-5-q021",
    "optionLabel": "C",
    "optionText": "20 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q021-D",
    "questionId": "exam-sec-1-5-q021",
    "optionLabel": "D",
    "optionText": "25 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q022-A",
    "questionId": "exam-sec-1-5-q022",
    "optionLabel": "A",
    "optionText": "14 MPa",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q022-B",
    "questionId": "exam-sec-1-5-q022",
    "optionLabel": "B",
    "optionText": "16 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q022-C",
    "questionId": "exam-sec-1-5-q022",
    "optionLabel": "C",
    "optionText": "12 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q022-D",
    "questionId": "exam-sec-1-5-q022",
    "optionLabel": "D",
    "optionText": "13 MPa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q023-A",
    "questionId": "exam-sec-1-5-q023",
    "optionLabel": "A",
    "optionText": "35 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q023-B",
    "questionId": "exam-sec-1-5-q023",
    "optionLabel": "B",
    "optionText": "38 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q023-C",
    "questionId": "exam-sec-1-5-q023",
    "optionLabel": "C",
    "optionText": "40 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q023-D",
    "questionId": "exam-sec-1-5-q023",
    "optionLabel": "D",
    "optionText": "32 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q024-A",
    "questionId": "exam-sec-1-5-q024",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q024-B",
    "questionId": "exam-sec-1-5-q024",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q025-A",
    "questionId": "exam-sec-1-5-q025",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q025-B",
    "questionId": "exam-sec-1-5-q025",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q026-A",
    "questionId": "exam-sec-1-5-q026",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q026-B",
    "questionId": "exam-sec-1-5-q026",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q027-A",
    "questionId": "exam-sec-1-5-q027",
    "optionLabel": "A",
    "optionText": "Menor que No. 5 o No. 6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q027-B",
    "questionId": "exam-sec-1-5-q027",
    "optionLabel": "B",
    "optionText": "Mayor que No. 5 o No. 6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q027-C",
    "questionId": "exam-sec-1-5-q027",
    "optionLabel": "C",
    "optionText": "Mayor que No. 7 o No. 8",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q027-D",
    "questionId": "exam-sec-1-5-q027",
    "optionLabel": "D",
    "optionText": "Menor que No. 7 o No. 8",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q028-A",
    "questionId": "exam-sec-1-5-q028",
    "optionLabel": "A",
    "optionText": "0.71 cm\u00b2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q028-B",
    "questionId": "exam-sec-1-5-q028",
    "optionLabel": "B",
    "optionText": "1.29 cm\u00b2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q028-C",
    "questionId": "exam-sec-1-5-q028",
    "optionLabel": "C",
    "optionText": "1.99 cm\u00b2",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q028-D",
    "questionId": "exam-sec-1-5-q028",
    "optionLabel": "D",
    "optionText": "2.84 cm\u00b2",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q029-A",
    "questionId": "exam-sec-1-5-q029",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q029-B",
    "questionId": "exam-sec-1-5-q029",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q030-A",
    "questionId": "exam-sec-1-5-q030",
    "optionLabel": "A",
    "optionText": "Del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q030-B",
    "questionId": "exam-sec-1-5-q030",
    "optionLabel": "B",
    "optionText": "De los trabajadores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q030-C",
    "questionId": "exam-sec-1-5-q030",
    "optionLabel": "C",
    "optionText": "Del refuerzo de acero y los trabajadores durante la colocaci\u00f3n del concreto",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q030-D",
    "questionId": "exam-sec-1-5-q030",
    "optionLabel": "D",
    "optionText": "Del acero de refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q031-A",
    "questionId": "exam-sec-1-5-q031",
    "optionLabel": "A",
    "optionText": "Acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q031-B",
    "questionId": "exam-sec-1-5-q031",
    "optionLabel": "B",
    "optionText": "Aluminio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q031-C",
    "questionId": "exam-sec-1-5-q031",
    "optionLabel": "C",
    "optionText": "Madera",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q031-D",
    "questionId": "exam-sec-1-5-q031",
    "optionLabel": "D",
    "optionText": "Poliestireno",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q032-A",
    "questionId": "exam-sec-1-5-q032",
    "optionLabel": "A",
    "optionText": "Qu\u00edmicamente activos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q032-B",
    "questionId": "exam-sec-1-5-q032",
    "optionLabel": "B",
    "optionText": "Qu\u00edmicamente inactivos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q032-C",
    "questionId": "exam-sec-1-5-q032",
    "optionLabel": "C",
    "optionText": "Solventes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q032-D",
    "questionId": "exam-sec-1-5-q032",
    "optionLabel": "D",
    "optionText": "A base de cera",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q033-A",
    "questionId": "exam-sec-1-5-q033",
    "optionLabel": "A",
    "optionText": "De bode a borde, de abajo a arriba",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q033-B",
    "questionId": "exam-sec-1-5-q033",
    "optionLabel": "B",
    "optionText": "De bode a borde, de arriba a abajo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q033-C",
    "questionId": "exam-sec-1-5-q033",
    "optionLabel": "C",
    "optionText": "De arriba abajo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q033-D",
    "questionId": "exam-sec-1-5-q033",
    "optionLabel": "D",
    "optionText": "De bode a borde",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q034-A",
    "questionId": "exam-sec-1-5-q034",
    "optionLabel": "A",
    "optionText": "11 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q034-B",
    "questionId": "exam-sec-1-5-q034",
    "optionLabel": "B",
    "optionText": "15 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q034-C",
    "questionId": "exam-sec-1-5-q034",
    "optionLabel": "C",
    "optionText": "13 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q034-D",
    "questionId": "exam-sec-1-5-q034",
    "optionLabel": "D",
    "optionText": "12 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q035-A",
    "questionId": "exam-sec-1-5-q035",
    "optionLabel": "A",
    "optionText": "Revenimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q035-B",
    "questionId": "exam-sec-1-5-q035",
    "optionLabel": "B",
    "optionText": "Resistencia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q035-C",
    "questionId": "exam-sec-1-5-q035",
    "optionLabel": "C",
    "optionText": "Refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q035-D",
    "questionId": "exam-sec-1-5-q035",
    "optionLabel": "D",
    "optionText": "Tiempo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q036-A",
    "questionId": "exam-sec-1-5-q036",
    "optionLabel": "A",
    "optionText": "Tiempo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q036-B",
    "questionId": "exam-sec-1-5-q036",
    "optionLabel": "B",
    "optionText": "Temperatura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q036-C",
    "questionId": "exam-sec-1-5-q036",
    "optionLabel": "C",
    "optionText": "Humedad",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q036-D",
    "questionId": "exam-sec-1-5-q036",
    "optionLabel": "D",
    "optionText": "Presi\u00f3n atmosf\u00e9rica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q037-A",
    "questionId": "exam-sec-1-5-q037",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q037-B",
    "questionId": "exam-sec-1-5-q037",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q038-A",
    "questionId": "exam-sec-1-5-q038",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q038-B",
    "questionId": "exam-sec-1-5-q038",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q039-A",
    "questionId": "exam-sec-1-5-q039",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q039-B",
    "questionId": "exam-sec-1-5-q039",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q040-A",
    "questionId": "exam-sec-1-5-q040",
    "optionLabel": "A",
    "optionText": "35 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q040-B",
    "questionId": "exam-sec-1-5-q040",
    "optionLabel": "B",
    "optionText": "85 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q040-C",
    "questionId": "exam-sec-1-5-q040",
    "optionLabel": "C",
    "optionText": "50 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q040-D",
    "questionId": "exam-sec-1-5-q040",
    "optionLabel": "D",
    "optionText": "29 \u00b0C",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q041-A",
    "questionId": "exam-sec-1-5-q041",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q041-B",
    "questionId": "exam-sec-1-5-q041",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q042-A",
    "questionId": "exam-sec-1-5-q042",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q042-B",
    "questionId": "exam-sec-1-5-q042",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q043-A",
    "questionId": "exam-sec-1-5-q043",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q043-B",
    "questionId": "exam-sec-1-5-q043",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q044-A",
    "questionId": "exam-sec-1-5-q044",
    "optionLabel": "A",
    "optionText": "5 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q044-B",
    "questionId": "exam-sec-1-5-q044",
    "optionLabel": "B",
    "optionText": "2 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q044-C",
    "questionId": "exam-sec-1-5-q044",
    "optionLabel": "C",
    "optionText": "3 d\u00edas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q044-D",
    "questionId": "exam-sec-1-5-q044",
    "optionLabel": "D",
    "optionText": "4 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q045-A",
    "questionId": "exam-sec-1-5-q045",
    "optionLabel": "A",
    "optionText": "-5.6 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q045-B",
    "questionId": "exam-sec-1-5-q045",
    "optionLabel": "B",
    "optionText": "22.3 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q045-C",
    "questionId": "exam-sec-1-5-q045",
    "optionLabel": "C",
    "optionText": "10.11 \u00b0C",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q045-D",
    "questionId": "exam-sec-1-5-q045",
    "optionLabel": "D",
    "optionText": "6.5 \u00b0C",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q046-A",
    "questionId": "exam-sec-1-5-q046",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q046-B",
    "questionId": "exam-sec-1-5-q046",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q047-A",
    "questionId": "exam-sec-1-5-q047",
    "optionLabel": "A",
    "optionText": "Tipo de concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q047-B",
    "questionId": "exam-sec-1-5-q047",
    "optionLabel": "B",
    "optionText": "Tama\u00f1o de panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q047-C",
    "questionId": "exam-sec-1-5-q047",
    "optionLabel": "C",
    "optionText": "Aditivos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q047-D",
    "questionId": "exam-sec-1-5-q047",
    "optionLabel": "D",
    "optionText": "Tipo de refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q048-A",
    "questionId": "exam-sec-1-5-q048",
    "optionLabel": "A",
    "optionText": "Revenimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q048-B",
    "questionId": "exam-sec-1-5-q048",
    "optionLabel": "B",
    "optionText": "Tipo de riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q048-C",
    "questionId": "exam-sec-1-5-q048",
    "optionLabel": "C",
    "optionText": "Criterios que afectan la selecci\u00f3n de la gr\u00faa",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q048-D",
    "questionId": "exam-sec-1-5-q048",
    "optionLabel": "D",
    "optionText": "Tiempo de curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q049-A",
    "questionId": "exam-sec-1-5-q049",
    "optionLabel": "A",
    "optionText": "Detallado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q049-B",
    "questionId": "exam-sec-1-5-q049",
    "optionLabel": "B",
    "optionText": "Planos de taller",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q049-C",
    "questionId": "exam-sec-1-5-q049",
    "optionLabel": "C",
    "optionText": "Planos de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q049-D",
    "questionId": "exam-sec-1-5-q049",
    "optionLabel": "D",
    "optionText": "Manual de montaje",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q050-A",
    "questionId": "exam-sec-1-5-q050",
    "optionLabel": "A",
    "optionText": "Detallado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q050-B",
    "questionId": "exam-sec-1-5-q050",
    "optionLabel": "B",
    "optionText": "Planos de taller",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q050-C",
    "questionId": "exam-sec-1-5-q050",
    "optionLabel": "C",
    "optionText": "Planos de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q050-D",
    "questionId": "exam-sec-1-5-q050",
    "optionLabel": "D",
    "optionText": "Manual de montaje",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q051-A",
    "questionId": "exam-sec-1-5-q051",
    "optionLabel": "A",
    "optionText": "De torsi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q051-B",
    "questionId": "exam-sec-1-5-q051",
    "optionLabel": "B",
    "optionText": "De compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q051-C",
    "questionId": "exam-sec-1-5-q051",
    "optionLabel": "C",
    "optionText": "Paralelas al plano, verticales y laterales",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q051-D",
    "questionId": "exam-sec-1-5-q051",
    "optionLabel": "D",
    "optionText": "Horizontales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q052-A",
    "questionId": "exam-sec-1-5-q052",
    "optionLabel": "A",
    "optionText": "Raz\u00f3n H/T",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q052-B",
    "questionId": "exam-sec-1-5-q052",
    "optionLabel": "B",
    "optionText": "Raz\u00f3n S/T",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q052-C",
    "questionId": "exam-sec-1-5-q052",
    "optionLabel": "C",
    "optionText": "Raz\u00f3n H/S",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q052-D",
    "questionId": "exam-sec-1-5-q052",
    "optionLabel": "D",
    "optionText": "Raz\u00f3n R/S",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q053-A",
    "questionId": "exam-sec-1-5-q053",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q053-B",
    "questionId": "exam-sec-1-5-q053",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q054-A",
    "questionId": "exam-sec-1-5-q054",
    "optionLabel": "A",
    "optionText": "Determinar como se colocara la cimbra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q054-B",
    "questionId": "exam-sec-1-5-q054",
    "optionLabel": "B",
    "optionText": "Determinar como se colaran los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q054-C",
    "questionId": "exam-sec-1-5-q054",
    "optionLabel": "C",
    "optionText": "Determinar como se dividir\u00e1n los muros en paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q054-D",
    "questionId": "exam-sec-1-5-q054",
    "optionLabel": "D",
    "optionText": "Determinar como se colocaran los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q055-A",
    "questionId": "exam-sec-1-5-q055",
    "optionLabel": "A",
    "optionText": "11.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q055-B",
    "questionId": "exam-sec-1-5-q055",
    "optionLabel": "B",
    "optionText": "13.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q055-C",
    "questionId": "exam-sec-1-5-q055",
    "optionLabel": "C",
    "optionText": "15 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q055-D",
    "questionId": "exam-sec-1-5-q055",
    "optionLabel": "D",
    "optionText": "12.2 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q056-A",
    "questionId": "exam-sec-1-5-q056",
    "optionLabel": "A",
    "optionText": "1.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q056-B",
    "questionId": "exam-sec-1-5-q056",
    "optionLabel": "B",
    "optionText": "0.45 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q056-C",
    "questionId": "exam-sec-1-5-q056",
    "optionLabel": "C",
    "optionText": "0.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q056-D",
    "questionId": "exam-sec-1-5-q056",
    "optionLabel": "D",
    "optionText": "1.85 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q057-A",
    "questionId": "exam-sec-1-5-q057",
    "optionLabel": "A",
    "optionText": "La capacidad de la gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q057-B",
    "questionId": "exam-sec-1-5-q057",
    "optionLabel": "B",
    "optionText": "Su peso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q057-C",
    "questionId": "exam-sec-1-5-q057",
    "optionLabel": "C",
    "optionText": "El presupuesto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q057-D",
    "questionId": "exam-sec-1-5-q057",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q058-A",
    "questionId": "exam-sec-1-5-q058",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q058-B",
    "questionId": "exam-sec-1-5-q058",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q059-A",
    "questionId": "exam-sec-1-5-q059",
    "optionLabel": "A",
    "optionText": "Que se cole en el plano horizontal",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q059-B",
    "questionId": "exam-sec-1-5-q059",
    "optionLabel": "B",
    "optionText": "Que no este en los planos de taller",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q059-C",
    "questionId": "exam-sec-1-5-q059",
    "optionLabel": "C",
    "optionText": "Que su refuerzo sea de malla",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q059-D",
    "questionId": "exam-sec-1-5-q059",
    "optionLabel": "D",
    "optionText": "Que se desvi\u00e9 de una figura rectil\u00ednea",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q060-A",
    "questionId": "exam-sec-1-5-q060",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q060-B",
    "questionId": "exam-sec-1-5-q060",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q061-A",
    "questionId": "exam-sec-1-5-q061",
    "optionLabel": "A",
    "optionText": "Acceso al sitio y circulaci\u00f3n de la gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q061-B",
    "questionId": "exam-sec-1-5-q061",
    "optionLabel": "B",
    "optionText": "Tama\u00f1os y pesos de paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q061-C",
    "questionId": "exam-sec-1-5-q061",
    "optionLabel": "C",
    "optionText": "Tipos y capacidades de las gr\u00faas disponibles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q061-D",
    "questionId": "exam-sec-1-5-q061",
    "optionLabel": "D",
    "optionText": "Muestra donde se cimbrar\u00e1n, su posici\u00f3n final  y sus secuencias de colado y montaje.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q062-A",
    "questionId": "exam-sec-1-5-q062",
    "optionLabel": "A",
    "optionText": "0.2",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q062-B",
    "questionId": "exam-sec-1-5-q062",
    "optionLabel": "B",
    "optionText": "0.4",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q062-C",
    "questionId": "exam-sec-1-5-q062",
    "optionLabel": "C",
    "optionText": "0.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q062-D",
    "questionId": "exam-sec-1-5-q062",
    "optionLabel": "D",
    "optionText": "0.35",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q063-A",
    "questionId": "exam-sec-1-5-q063",
    "optionLabel": "A",
    "optionText": "El peso de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q063-B",
    "questionId": "exam-sec-1-5-q063",
    "optionLabel": "B",
    "optionText": "La maniobrabilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q063-C",
    "questionId": "exam-sec-1-5-q063",
    "optionLabel": "C",
    "optionText": "La franja de cierre",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q063-D",
    "questionId": "exam-sec-1-5-q063",
    "optionLabel": "D",
    "optionText": "El tipo de suelo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q064-A",
    "questionId": "exam-sec-1-5-q064",
    "optionLabel": "A",
    "optionText": "Pluma de celos\u00eda montada en cami\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q064-B",
    "questionId": "exam-sec-1-5-q064",
    "optionLabel": "B",
    "optionText": "Pluma de celos\u00eda montada en rieles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q064-C",
    "questionId": "exam-sec-1-5-q064",
    "optionLabel": "C",
    "optionText": "Pluma hidr\u00e1ulica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q064-D",
    "questionId": "exam-sec-1-5-q064",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q065-A",
    "questionId": "exam-sec-1-5-q065",
    "optionLabel": "A",
    "optionText": "Tipo y capacidad de la gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q065-B",
    "questionId": "exam-sec-1-5-q065",
    "optionLabel": "B",
    "optionText": "Potencial de da\u00f1ar la losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q065-C",
    "questionId": "exam-sec-1-5-q065",
    "optionLabel": "C",
    "optionText": "Accesibilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q065-D",
    "questionId": "exam-sec-1-5-q065",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q066-A",
    "questionId": "exam-sec-1-5-q066",
    "optionLabel": "A",
    "optionText": "Distancia que la gr\u00faa transporta al panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q066-B",
    "questionId": "exam-sec-1-5-q066",
    "optionLabel": "B",
    "optionText": "El tipo de suelo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q066-C",
    "questionId": "exam-sec-1-5-q066",
    "optionLabel": "C",
    "optionText": "El numero de paneles que se colocara",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q066-D",
    "questionId": "exam-sec-1-5-q066",
    "optionLabel": "D",
    "optionText": "El acabado de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q067-A",
    "questionId": "exam-sec-1-5-q067",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q067-B",
    "questionId": "exam-sec-1-5-q067",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q068-A",
    "questionId": "exam-sec-1-5-q068",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q068-B",
    "questionId": "exam-sec-1-5-q068",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q069-A",
    "questionId": "exam-sec-1-5-q069",
    "optionLabel": "A",
    "optionText": "Pulido",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q069-B",
    "questionId": "exam-sec-1-5-q069",
    "optionLabel": "B",
    "optionText": "Raspado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q069-C",
    "questionId": "exam-sec-1-5-q069",
    "optionLabel": "C",
    "optionText": "Agregado expuesto",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q069-D",
    "questionId": "exam-sec-1-5-q069",
    "optionLabel": "D",
    "optionText": "Moldeado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q070-A",
    "questionId": "exam-sec-1-5-q070",
    "optionLabel": "A",
    "optionText": "Insertos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q070-B",
    "questionId": "exam-sec-1-5-q070",
    "optionLabel": "B",
    "optionText": "Curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q070-C",
    "questionId": "exam-sec-1-5-q070",
    "optionLabel": "C",
    "optionText": "Recubrimiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q070-D",
    "questionId": "exam-sec-1-5-q070",
    "optionLabel": "D",
    "optionText": "Acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q071-A",
    "questionId": "exam-sec-1-5-q071",
    "optionLabel": "A",
    "optionText": "Desempe\u00f1o t\u00e9rmico de los paneles de muro",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q071-B",
    "questionId": "exam-sec-1-5-q071",
    "optionLabel": "B",
    "optionText": "La altura sin soporte",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q071-C",
    "questionId": "exam-sec-1-5-q071",
    "optionLabel": "C",
    "optionText": "El revenimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q071-D",
    "questionId": "exam-sec-1-5-q071",
    "optionLabel": "D",
    "optionText": "La resistencia contra incendios",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q072-A",
    "questionId": "exam-sec-1-5-q072",
    "optionLabel": "A",
    "optionText": "NTC 111",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q072-B",
    "questionId": "exam-sec-1-5-q072",
    "optionLabel": "B",
    "optionText": "ASTM C270",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q072-C",
    "questionId": "exam-sec-1-5-q072",
    "optionLabel": "C",
    "optionText": "ACI 318",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q072-D",
    "questionId": "exam-sec-1-5-q072",
    "optionLabel": "D",
    "optionText": "IECC",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q073-A",
    "questionId": "exam-sec-1-5-q073",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q073-B",
    "questionId": "exam-sec-1-5-q073",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q074-A",
    "questionId": "exam-sec-1-5-q074",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q074-B",
    "questionId": "exam-sec-1-5-q074",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q075-A",
    "questionId": "exam-sec-1-5-q075",
    "optionLabel": "A",
    "optionText": "Sistemas de aislamiento Steelfoam Techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q075-B",
    "questionId": "exam-sec-1-5-q075",
    "optionLabel": "B",
    "optionText": "Sistemas de aislamiento Concreto aislante ligero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q075-C",
    "questionId": "exam-sec-1-5-q075",
    "optionLabel": "C",
    "optionText": "Sistemas de aislamiento con poliuretano",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q075-D",
    "questionId": "exam-sec-1-5-q075",
    "optionLabel": "D",
    "optionText": "Sistemas de aislamiento integralmente colados.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q076-A",
    "questionId": "exam-sec-1-5-q076",
    "optionLabel": "A",
    "optionText": "En dos capas de concreto separadas por una capa de aislamiento r\u00edgido",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q076-B",
    "questionId": "exam-sec-1-5-q076",
    "optionLabel": "B",
    "optionText": "En dos capas de concreto separadas por una capa de refuerzo de acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q076-C",
    "questionId": "exam-sec-1-5-q076",
    "optionLabel": "C",
    "optionText": "En dos capas de concreto separadas por una capa madera",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q076-D",
    "questionId": "exam-sec-1-5-q076",
    "optionLabel": "D",
    "optionText": "En dos capas de concreto separadas por una capa de tabla roca",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q077-A",
    "questionId": "exam-sec-1-5-q077",
    "optionLabel": "A",
    "optionText": "Vinilo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q077-B",
    "questionId": "exam-sec-1-5-q077",
    "optionLabel": "B",
    "optionText": "Madera aligerada",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q077-C",
    "questionId": "exam-sec-1-5-q077",
    "optionLabel": "C",
    "optionText": "Poliisocianurato",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q077-D",
    "questionId": "exam-sec-1-5-q077",
    "optionLabel": "D",
    "optionText": "Poliestireno",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q078-A",
    "questionId": "exam-sec-1-5-q078",
    "optionLabel": "A",
    "optionText": "Paneles compuestos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q078-B",
    "questionId": "exam-sec-1-5-q078",
    "optionLabel": "B",
    "optionText": "Paneles parcialmente compuestos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-1-5-q078-C",
    "questionId": "exam-sec-1-5-q078",
    "optionLabel": "C",
    "optionText": "Muros de media asta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q078-D",
    "questionId": "exam-sec-1-5-q078",
    "optionLabel": "D",
    "optionText": "Muros repaldados",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q079-A",
    "questionId": "exam-sec-1-5-q079",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-1-5-q079-B",
    "questionId": "exam-sec-1-5-q079",
    "optionLabel": "B",
    "optionText": "FALSO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q001-A",
    "questionId": "exam-sec-2-1-q001",
    "optionLabel": "A",
    "optionText": "Losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q001-B",
    "questionId": "exam-sec-2-1-q001",
    "optionLabel": "B",
    "optionText": "Base",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q001-C",
    "questionId": "exam-sec-2-1-q001",
    "optionLabel": "C",
    "optionText": "Cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q001-D",
    "questionId": "exam-sec-2-1-q001",
    "optionLabel": "D",
    "optionText": "Subrasante",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q002-A",
    "questionId": "exam-sec-2-1-q002",
    "optionLabel": "A",
    "optionText": "Plantilla",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q002-B",
    "questionId": "exam-sec-2-1-q002",
    "optionLabel": "B",
    "optionText": "Cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q002-C",
    "questionId": "exam-sec-2-1-q002",
    "optionLabel": "C",
    "optionText": "Subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q002-D",
    "questionId": "exam-sec-2-1-q002",
    "optionLabel": "D",
    "optionText": "Base",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q003-A",
    "questionId": "exam-sec-2-1-q003",
    "optionLabel": "A",
    "optionText": "Cargas de servicio y construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q003-B",
    "questionId": "exam-sec-2-1-q003",
    "optionLabel": "B",
    "optionText": "Requerimientos del modulo de ruptura  y el modulo de la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q003-C",
    "questionId": "exam-sec-2-1-q003",
    "optionLabel": "C",
    "optionText": "Control de calidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q003-D",
    "questionId": "exam-sec-2-1-q003",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q004-A",
    "questionId": "exam-sec-2-1-q004",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q004-B",
    "questionId": "exam-sec-2-1-q004",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q005-A",
    "questionId": "exam-sec-2-1-q005",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q005-B",
    "questionId": "exam-sec-2-1-q005",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q006-A",
    "questionId": "exam-sec-2-1-q006",
    "optionLabel": "A",
    "optionText": "Donde se cuelan los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q006-B",
    "questionId": "exam-sec-2-1-q006",
    "optionLabel": "B",
    "optionText": "En la cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q006-C",
    "questionId": "exam-sec-2-1-q006",
    "optionLabel": "C",
    "optionText": "Donde van colocados los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q006-D",
    "questionId": "exam-sec-2-1-q006",
    "optionLabel": "D",
    "optionText": "Donde se sujetan las riostras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q007-A",
    "questionId": "exam-sec-2-1-q007",
    "optionLabel": "A",
    "optionText": "Cargas de mobiliario",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q007-B",
    "questionId": "exam-sec-2-1-q007",
    "optionLabel": "B",
    "optionText": "Revestimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q007-C",
    "questionId": "exam-sec-2-1-q007",
    "optionLabel": "C",
    "optionText": "Paso de montacargas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q007-D",
    "questionId": "exam-sec-2-1-q007",
    "optionLabel": "D",
    "optionText": "Almacenamiento de materiales de construcci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q008-A",
    "questionId": "exam-sec-2-1-q008",
    "optionLabel": "A",
    "optionText": "Trabajadores y refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q008-B",
    "questionId": "exam-sec-2-1-q008",
    "optionLabel": "B",
    "optionText": "Gr\u00faas y camiones",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q008-C",
    "questionId": "exam-sec-2-1-q008",
    "optionLabel": "C",
    "optionText": "Almacenamiento de materiales de construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q008-D",
    "questionId": "exam-sec-2-1-q008",
    "optionLabel": "D",
    "optionText": "Colado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q009-A",
    "questionId": "exam-sec-2-1-q009",
    "optionLabel": "A",
    "optionText": "Colado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q009-B",
    "questionId": "exam-sec-2-1-q009",
    "optionLabel": "B",
    "optionText": "Arriostramiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q009-C",
    "questionId": "exam-sec-2-1-q009",
    "optionLabel": "C",
    "optionText": "Almacenamiento de materiales de construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q009-D",
    "questionId": "exam-sec-2-1-q009",
    "optionLabel": "D",
    "optionText": "Paso de montacargas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q010-A",
    "questionId": "exam-sec-2-1-q010",
    "optionLabel": "A",
    "optionText": "36 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q010-B",
    "questionId": "exam-sec-2-1-q010",
    "optionLabel": "B",
    "optionText": "35 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q010-C",
    "questionId": "exam-sec-2-1-q010",
    "optionLabel": "C",
    "optionText": "39 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q010-D",
    "questionId": "exam-sec-2-1-q010",
    "optionLabel": "D",
    "optionText": "38 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q011-A",
    "questionId": "exam-sec-2-1-q011",
    "optionLabel": "A",
    "optionText": "Propicia una mayor cantidad de grietas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q011-B",
    "questionId": "exam-sec-2-1-q011",
    "optionLabel": "B",
    "optionText": "Propicia una menor cantidad de grietas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q011-C",
    "questionId": "exam-sec-2-1-q011",
    "optionLabel": "C",
    "optionText": "El ancho de cada grieta individual se reduce.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q011-D",
    "questionId": "exam-sec-2-1-q011",
    "optionLabel": "D",
    "optionText": "El ancho de cada grieta individual aumenta.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q012-A",
    "questionId": "exam-sec-2-1-q012",
    "optionLabel": "A",
    "optionText": "Cantidad de acero para resistir la compresi\u00f3n del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q012-B",
    "questionId": "exam-sec-2-1-q012",
    "optionLabel": "B",
    "optionText": "Cantidad de acero para resistir la contracci\u00f3n del concreto",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q012-C",
    "questionId": "exam-sec-2-1-q012",
    "optionLabel": "C",
    "optionText": "Cantidad de acero para resistir la tensi\u00f3n del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q012-D",
    "questionId": "exam-sec-2-1-q012",
    "optionLabel": "D",
    "optionText": "Cantidad de acero para resistir la flexi\u00f3n del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q013-A",
    "questionId": "exam-sec-2-1-q013",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q013-B",
    "questionId": "exam-sec-2-1-q013",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q014-A",
    "questionId": "exam-sec-2-1-q014",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q014-B",
    "questionId": "exam-sec-2-1-q014",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q015-A",
    "questionId": "exam-sec-2-1-q015",
    "optionLabel": "A",
    "optionText": "Aumentar el espaciado entre juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q015-B",
    "questionId": "exam-sec-2-1-q015",
    "optionLabel": "B",
    "optionText": "Aumentar el ancho de juntas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q015-C",
    "questionId": "exam-sec-2-1-q015",
    "optionLabel": "C",
    "optionText": "Reducir el espaciado entre juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q015-D",
    "questionId": "exam-sec-2-1-q015",
    "optionLabel": "D",
    "optionText": "Reducir la necesidad de juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q016-A",
    "questionId": "exam-sec-2-1-q016",
    "optionLabel": "A",
    "optionText": "Compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q016-B",
    "questionId": "exam-sec-2-1-q016",
    "optionLabel": "B",
    "optionText": "Combadura",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q016-C",
    "questionId": "exam-sec-2-1-q016",
    "optionLabel": "C",
    "optionText": "Refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q016-D",
    "questionId": "exam-sec-2-1-q016",
    "optionLabel": "D",
    "optionText": "Resistencia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q017-A",
    "questionId": "exam-sec-2-1-q017",
    "optionLabel": "A",
    "optionText": "Juntas enchavetadas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q017-B",
    "questionId": "exam-sec-2-1-q017",
    "optionLabel": "B",
    "optionText": "Juntas aserradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q017-C",
    "questionId": "exam-sec-2-1-q017",
    "optionLabel": "C",
    "optionText": "Juntas de control",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q017-D",
    "questionId": "exam-sec-2-1-q017",
    "optionLabel": "D",
    "optionText": "Juntas de tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q018-A",
    "questionId": "exam-sec-2-1-q018",
    "optionLabel": "A",
    "optionText": "Juntas enchavetadas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q018-B",
    "questionId": "exam-sec-2-1-q018",
    "optionLabel": "B",
    "optionText": "Juntas a tope",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q018-C",
    "questionId": "exam-sec-2-1-q018",
    "optionLabel": "C",
    "optionText": "Juntas de concreto prefabricado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q018-D",
    "questionId": "exam-sec-2-1-q018",
    "optionLabel": "D",
    "optionText": "Juntas de aislamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q019-A",
    "questionId": "exam-sec-2-1-q019",
    "optionLabel": "A",
    "optionText": "Juntas enchavetadas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q019-B",
    "questionId": "exam-sec-2-1-q019",
    "optionLabel": "B",
    "optionText": "Juntas aserradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q019-C",
    "questionId": "exam-sec-2-1-q019",
    "optionLabel": "C",
    "optionText": "Juntas de control",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q019-D",
    "questionId": "exam-sec-2-1-q019",
    "optionLabel": "D",
    "optionText": "Juntas de aislamiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q020-A",
    "questionId": "exam-sec-2-1-q020",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q020-B",
    "questionId": "exam-sec-2-1-q020",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q021-A",
    "questionId": "exam-sec-2-1-q021",
    "optionLabel": "A",
    "optionText": "Franjas de tableros",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q021-B",
    "questionId": "exam-sec-2-1-q021",
    "optionLabel": "B",
    "optionText": "Juntas aserradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q021-C",
    "questionId": "exam-sec-2-1-q021",
    "optionLabel": "C",
    "optionText": "Juntas de control",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q021-D",
    "questionId": "exam-sec-2-1-q021",
    "optionLabel": "D",
    "optionText": "Juntas aisladas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q022-A",
    "questionId": "exam-sec-2-1-q022",
    "optionLabel": "A",
    "optionText": "Enrasadores laser",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q022-B",
    "questionId": "exam-sec-2-1-q022",
    "optionLabel": "B",
    "optionText": "Juntas aisladas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q022-C",
    "questionId": "exam-sec-2-1-q022",
    "optionLabel": "C",
    "optionText": "Juntas de tope",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q022-D",
    "questionId": "exam-sec-2-1-q022",
    "optionLabel": "D",
    "optionText": "Franjas de tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q023-A",
    "questionId": "exam-sec-2-1-q023",
    "optionLabel": "A",
    "optionText": "En entradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q023-B",
    "questionId": "exam-sec-2-1-q023",
    "optionLabel": "B",
    "optionText": "En cambios abruptos de dimensiones",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q023-C",
    "questionId": "exam-sec-2-1-q023",
    "optionLabel": "C",
    "optionText": "En salidas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q023-D",
    "questionId": "exam-sec-2-1-q023",
    "optionLabel": "D",
    "optionText": "Entre cimentaciones y la losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q024-A",
    "questionId": "exam-sec-2-1-q024",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q024-B",
    "questionId": "exam-sec-2-1-q024",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q025-A",
    "questionId": "exam-sec-2-1-q025",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q025-B",
    "questionId": "exam-sec-2-1-q025",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q026-A",
    "questionId": "exam-sec-2-1-q026",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q026-B",
    "questionId": "exam-sec-2-1-q026",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q027-A",
    "questionId": "exam-sec-2-1-q027",
    "optionLabel": "A",
    "optionText": "Aplanadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q027-B",
    "questionId": "exam-sec-2-1-q027",
    "optionLabel": "B",
    "optionText": "Gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q027-C",
    "questionId": "exam-sec-2-1-q027",
    "optionLabel": "C",
    "optionText": "Llanas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q027-D",
    "questionId": "exam-sec-2-1-q027",
    "optionLabel": "D",
    "optionText": "Dragas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q028-A",
    "questionId": "exam-sec-2-1-q028",
    "optionLabel": "A",
    "optionText": "Raz\u00f3n H/T",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q028-B",
    "questionId": "exam-sec-2-1-q028",
    "optionLabel": "B",
    "optionText": "Teor\u00eda de arrastre",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q028-C",
    "questionId": "exam-sec-2-1-q028",
    "optionLabel": "C",
    "optionText": "F-Number",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q028-D",
    "questionId": "exam-sec-2-1-q028",
    "optionLabel": "D",
    "optionText": "CTE",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q029-A",
    "questionId": "exam-sec-2-1-q029",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q029-B",
    "questionId": "exam-sec-2-1-q029",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q030-A",
    "questionId": "exam-sec-2-1-q030",
    "optionLabel": "A",
    "optionText": "0.4",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q030-B",
    "questionId": "exam-sec-2-1-q030",
    "optionLabel": "B",
    "optionText": "0.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q030-C",
    "questionId": "exam-sec-2-1-q030",
    "optionLabel": "C",
    "optionText": "0.3",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q030-D",
    "questionId": "exam-sec-2-1-q030",
    "optionLabel": "D",
    "optionText": "0.15",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q031-A",
    "questionId": "exam-sec-2-1-q031",
    "optionLabel": "A",
    "optionText": "Barrido vertical",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q031-B",
    "questionId": "exam-sec-2-1-q031",
    "optionLabel": "B",
    "optionText": "Doble cepillado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q031-C",
    "questionId": "exam-sec-2-1-q031",
    "optionLabel": "C",
    "optionText": "Agua bajo presi\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q031-D",
    "questionId": "exam-sec-2-1-q031",
    "optionLabel": "D",
    "optionText": "El\u00e9ctrico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q032-A",
    "questionId": "exam-sec-2-1-q032",
    "optionLabel": "A",
    "optionText": "Donde van los muros de carga",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q032-B",
    "questionId": "exam-sec-2-1-q032",
    "optionLabel": "B",
    "optionText": "Solo en el per\u00edmetro del edificio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q032-C",
    "questionId": "exam-sec-2-1-q032",
    "optionLabel": "C",
    "optionText": "A lo largo de las juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q032-D",
    "questionId": "exam-sec-2-1-q032",
    "optionLabel": "D",
    "optionText": "En entradas y salidas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q033-A",
    "questionId": "exam-sec-2-1-q033",
    "optionLabel": "A",
    "optionText": "Antes de erigir los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q033-B",
    "questionId": "exam-sec-2-1-q033",
    "optionLabel": "B",
    "optionText": "Despu\u00e9s de erigir los paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q033-C",
    "questionId": "exam-sec-2-1-q033",
    "optionLabel": "C",
    "optionText": "Despu\u00e9s de retirar el material de relleno",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q033-D",
    "questionId": "exam-sec-2-1-q033",
    "optionLabel": "D",
    "optionText": "Antes de retirar los insertos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q034-A",
    "questionId": "exam-sec-2-1-q034",
    "optionLabel": "A",
    "optionText": "11 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q034-B",
    "questionId": "exam-sec-2-1-q034",
    "optionLabel": "B",
    "optionText": "15 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q034-C",
    "questionId": "exam-sec-2-1-q034",
    "optionLabel": "C",
    "optionText": "13 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q034-D",
    "questionId": "exam-sec-2-1-q034",
    "optionLabel": "D",
    "optionText": "12 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q035-A",
    "questionId": "exam-sec-2-1-q035",
    "optionLabel": "A",
    "optionText": "Logar\u00edtmica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q035-B",
    "questionId": "exam-sec-2-1-q035",
    "optionLabel": "B",
    "optionText": "Resistencia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q035-C",
    "questionId": "exam-sec-2-1-q035",
    "optionLabel": "C",
    "optionText": "Exponencial",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q035-D",
    "questionId": "exam-sec-2-1-q035",
    "optionLabel": "D",
    "optionText": "Inversamente proporcional",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q036-A",
    "questionId": "exam-sec-2-1-q036",
    "optionLabel": "A",
    "optionText": "1 a 3 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q036-B",
    "questionId": "exam-sec-2-1-q036",
    "optionLabel": "B",
    "optionText": "2.5 a 3 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q036-C",
    "questionId": "exam-sec-2-1-q036",
    "optionLabel": "C",
    "optionText": "1.5 a 3 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q036-D",
    "questionId": "exam-sec-2-1-q036",
    "optionLabel": "D",
    "optionText": "1.5 a 2 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q037-A",
    "questionId": "exam-sec-2-1-q037",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q037-B",
    "questionId": "exam-sec-2-1-q037",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q038-A",
    "questionId": "exam-sec-2-1-q038",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q038-B",
    "questionId": "exam-sec-2-1-q038",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q039-A",
    "questionId": "exam-sec-2-1-q039",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q039-B",
    "questionId": "exam-sec-2-1-q039",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q040-A",
    "questionId": "exam-sec-2-1-q040",
    "optionLabel": "A",
    "optionText": "En la conexi\u00f3n panel-losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q040-B",
    "questionId": "exam-sec-2-1-q040",
    "optionLabel": "B",
    "optionText": "En la conexi\u00f3n panel-losa de techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q040-C",
    "questionId": "exam-sec-2-1-q040",
    "optionLabel": "C",
    "optionText": "En las juntas de la losa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q040-D",
    "questionId": "exam-sec-2-1-q040",
    "optionLabel": "D",
    "optionText": "En las juntas de los paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q041-A",
    "questionId": "exam-sec-2-1-q041",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q041-B",
    "questionId": "exam-sec-2-1-q041",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q042-A",
    "questionId": "exam-sec-2-1-q042",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q042-B",
    "questionId": "exam-sec-2-1-q042",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q043-A",
    "questionId": "exam-sec-2-1-q043",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q043-B",
    "questionId": "exam-sec-2-1-q043",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q044-A",
    "questionId": "exam-sec-2-1-q044",
    "optionLabel": "A",
    "optionText": "400 a 500 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q044-B",
    "questionId": "exam-sec-2-1-q044",
    "optionLabel": "B",
    "optionText": "200 a 500 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q044-C",
    "questionId": "exam-sec-2-1-q044",
    "optionLabel": "C",
    "optionText": "300 a 600 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q044-D",
    "questionId": "exam-sec-2-1-q044",
    "optionLabel": "D",
    "optionText": "400 a 700 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q045-A",
    "questionId": "exam-sec-2-1-q045",
    "optionLabel": "A",
    "optionText": "Perpendicular",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q045-B",
    "questionId": "exam-sec-2-1-q045",
    "optionLabel": "B",
    "optionText": "Embebidas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q045-C",
    "questionId": "exam-sec-2-1-q045",
    "optionLabel": "C",
    "optionText": "Permanente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q045-D",
    "questionId": "exam-sec-2-1-q045",
    "optionLabel": "D",
    "optionText": "Temporal",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q046-A",
    "questionId": "exam-sec-2-1-q046",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q046-B",
    "questionId": "exam-sec-2-1-q046",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q047-A",
    "questionId": "exam-sec-2-1-q047",
    "optionLabel": "A",
    "optionText": "Arena",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q047-B",
    "questionId": "exam-sec-2-1-q047",
    "optionLabel": "B",
    "optionText": "Aluminio",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q047-C",
    "questionId": "exam-sec-2-1-q047",
    "optionLabel": "C",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q047-D",
    "questionId": "exam-sec-2-1-q047",
    "optionLabel": "D",
    "optionText": "Tablaroca",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q048-A",
    "questionId": "exam-sec-2-1-q048",
    "optionLabel": "A",
    "optionText": "De 2 a 3 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q048-B",
    "questionId": "exam-sec-2-1-q048",
    "optionLabel": "B",
    "optionText": "De 2.1 a 3.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q048-C",
    "questionId": "exam-sec-2-1-q048",
    "optionLabel": "C",
    "optionText": "De 1 a 1.2 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q048-D",
    "questionId": "exam-sec-2-1-q048",
    "optionLabel": "D",
    "optionText": "De 0.5 a 2 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q049-A",
    "questionId": "exam-sec-2-1-q049",
    "optionLabel": "A",
    "optionText": "Desmoldante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q049-B",
    "questionId": "exam-sec-2-1-q049",
    "optionLabel": "B",
    "optionText": "Aceite",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q049-C",
    "questionId": "exam-sec-2-1-q049",
    "optionLabel": "C",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q049-D",
    "questionId": "exam-sec-2-1-q049",
    "optionLabel": "D",
    "optionText": "Poliuretano",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q050-A",
    "questionId": "exam-sec-2-1-q050",
    "optionLabel": "A",
    "optionText": "Canales de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q050-B",
    "questionId": "exam-sec-2-1-q050",
    "optionLabel": "B",
    "optionText": "Forros de moldes",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q050-C",
    "questionId": "exam-sec-2-1-q050",
    "optionLabel": "C",
    "optionText": "Hendiduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q050-D",
    "questionId": "exam-sec-2-1-q050",
    "optionLabel": "D",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q051-A",
    "questionId": "exam-sec-2-1-q051",
    "optionLabel": "A",
    "optionText": "Canales de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q051-B",
    "questionId": "exam-sec-2-1-q051",
    "optionLabel": "B",
    "optionText": "Forros de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q051-C",
    "questionId": "exam-sec-2-1-q051",
    "optionLabel": "C",
    "optionText": "Hendiduras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q051-D",
    "questionId": "exam-sec-2-1-q051",
    "optionLabel": "D",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q052-A",
    "questionId": "exam-sec-2-1-q052",
    "optionLabel": "A",
    "optionText": "Molduras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q052-B",
    "questionId": "exam-sec-2-1-q052",
    "optionLabel": "B",
    "optionText": "Canales de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q052-C",
    "questionId": "exam-sec-2-1-q052",
    "optionLabel": "C",
    "optionText": "Hendiduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q052-D",
    "questionId": "exam-sec-2-1-q052",
    "optionLabel": "D",
    "optionText": "Forros de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q053-A",
    "questionId": "exam-sec-2-1-q053",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q053-B",
    "questionId": "exam-sec-2-1-q053",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q054-A",
    "questionId": "exam-sec-2-1-q054",
    "optionLabel": "A",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q054-B",
    "questionId": "exam-sec-2-1-q054",
    "optionLabel": "B",
    "optionText": "Hendiduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q054-C",
    "questionId": "exam-sec-2-1-q054",
    "optionLabel": "C",
    "optionText": "Puertas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q054-D",
    "questionId": "exam-sec-2-1-q054",
    "optionLabel": "D",
    "optionText": "Ventanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q055-A",
    "questionId": "exam-sec-2-1-q055",
    "optionLabel": "A",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q055-B",
    "questionId": "exam-sec-2-1-q055",
    "optionLabel": "B",
    "optionText": "Puertas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q055-C",
    "questionId": "exam-sec-2-1-q055",
    "optionLabel": "C",
    "optionText": "Ventanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q055-D",
    "questionId": "exam-sec-2-1-q055",
    "optionLabel": "D",
    "optionText": "Conexiones y hendiduras para instalaciones",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q056-A",
    "questionId": "exam-sec-2-1-q056",
    "optionLabel": "A",
    "optionText": "Son cavidades en las caras de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q056-B",
    "questionId": "exam-sec-2-1-q056",
    "optionLabel": "B",
    "optionText": "Son columnas de concreto reforzadas en el panel que sean m\u00e1s gruesas que el grosor general del panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q056-C",
    "questionId": "exam-sec-2-1-q056",
    "optionLabel": "C",
    "optionText": "Es una textura de rastrillado en las caras de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q056-D",
    "questionId": "exam-sec-2-1-q056",
    "optionLabel": "D",
    "optionText": "Es un tipo de moldura para lo bordes de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q057-A",
    "questionId": "exam-sec-2-1-q057",
    "optionLabel": "A",
    "optionText": "Para delimitar tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q057-B",
    "questionId": "exam-sec-2-1-q057",
    "optionLabel": "B",
    "optionText": "Como material de moldaje",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q057-C",
    "questionId": "exam-sec-2-1-q057",
    "optionLabel": "C",
    "optionText": "Como refuerzo estructural",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q057-D",
    "questionId": "exam-sec-2-1-q057",
    "optionLabel": "D",
    "optionText": "Como forma de acabado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q058-A",
    "questionId": "exam-sec-2-1-q058",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q058-B",
    "questionId": "exam-sec-2-1-q058",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q059-A",
    "questionId": "exam-sec-2-1-q059",
    "optionLabel": "A",
    "optionText": "80 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q059-B",
    "questionId": "exam-sec-2-1-q059",
    "optionLabel": "B",
    "optionText": "85 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q059-C",
    "questionId": "exam-sec-2-1-q059",
    "optionLabel": "C",
    "optionText": "70 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q059-D",
    "questionId": "exam-sec-2-1-q059",
    "optionLabel": "D",
    "optionText": "75 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q060-A",
    "questionId": "exam-sec-2-1-q060",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q060-B",
    "questionId": "exam-sec-2-1-q060",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q061-A",
    "questionId": "exam-sec-2-1-q061",
    "optionLabel": "A",
    "optionText": "Los dos paneles de las esquinas se moldean hacia adentro",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q061-B",
    "questionId": "exam-sec-2-1-q061",
    "optionLabel": "B",
    "optionText": "Con las ubicaciones de soporte del molde.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q061-C",
    "questionId": "exam-sec-2-1-q061",
    "optionLabel": "C",
    "optionText": "Se pueden llenar con un material apropiado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q061-D",
    "questionId": "exam-sec-2-1-q061",
    "optionLabel": "D",
    "optionText": "Se cuelga alrededor de los puntos altos ocasionados por el agregado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q062-A",
    "questionId": "exam-sec-2-1-q062",
    "optionLabel": "A",
    "optionText": "Espaciadores para soporte",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q062-B",
    "questionId": "exam-sec-2-1-q062",
    "optionLabel": "B",
    "optionText": "Riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q062-C",
    "questionId": "exam-sec-2-1-q062",
    "optionLabel": "C",
    "optionText": "Cizallas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q062-D",
    "questionId": "exam-sec-2-1-q062",
    "optionLabel": "D",
    "optionText": "Llanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q063-A",
    "questionId": "exam-sec-2-1-q063",
    "optionLabel": "A",
    "optionText": "Abrazaderas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q063-B",
    "questionId": "exam-sec-2-1-q063",
    "optionLabel": "B",
    "optionText": "Tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q063-C",
    "questionId": "exam-sec-2-1-q063",
    "optionLabel": "C",
    "optionText": "Juntas de construcci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q063-D",
    "questionId": "exam-sec-2-1-q063",
    "optionLabel": "D",
    "optionText": "Moldaje hermanado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q064-A",
    "questionId": "exam-sec-2-1-q064",
    "optionLabel": "A",
    "optionText": "En paneles con cavidades",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q064-B",
    "questionId": "exam-sec-2-1-q064",
    "optionLabel": "B",
    "optionText": "En puertas y ventanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q064-C",
    "questionId": "exam-sec-2-1-q064",
    "optionLabel": "C",
    "optionText": "En paneles cuya altura sea mayor a 34 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q064-D",
    "questionId": "exam-sec-2-1-q064",
    "optionLabel": "D",
    "optionText": "En curvas equivalentes en plano o juntas desplazadas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q065-A",
    "questionId": "exam-sec-2-1-q065",
    "optionLabel": "A",
    "optionText": "Paneles de diferentes dimensiones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q065-B",
    "questionId": "exam-sec-2-1-q065",
    "optionLabel": "B",
    "optionText": "Paneles de media asta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q065-C",
    "questionId": "exam-sec-2-1-q065",
    "optionLabel": "C",
    "optionText": "Paneles con grosor menor al promedio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q065-D",
    "questionId": "exam-sec-2-1-q065",
    "optionLabel": "D",
    "optionText": "Paneles y aberturas circulares, con \u00e1ngulos complejos y convergentes.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q066-A",
    "questionId": "exam-sec-2-1-q066",
    "optionLabel": "A",
    "optionText": "Paneles curvos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q066-B",
    "questionId": "exam-sec-2-1-q066",
    "optionLabel": "B",
    "optionText": "Paneles de media asta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q066-C",
    "questionId": "exam-sec-2-1-q066",
    "optionLabel": "C",
    "optionText": "Paneles con grosor menor al promedio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q066-D",
    "questionId": "exam-sec-2-1-q066",
    "optionLabel": "D",
    "optionText": "Paneles angulares",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q067-A",
    "questionId": "exam-sec-2-1-q067",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q067-B",
    "questionId": "exam-sec-2-1-q067",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q068-A",
    "questionId": "exam-sec-2-1-q068",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q068-B",
    "questionId": "exam-sec-2-1-q068",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q069-A",
    "questionId": "exam-sec-2-1-q069",
    "optionLabel": "A",
    "optionText": "Adhesivos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q069-B",
    "questionId": "exam-sec-2-1-q069",
    "optionLabel": "B",
    "optionText": "Sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q069-C",
    "questionId": "exam-sec-2-1-q069",
    "optionLabel": "C",
    "optionText": "Sujeci\u00f3n mec\u00e1nica",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q069-D",
    "questionId": "exam-sec-2-1-q069",
    "optionLabel": "D",
    "optionText": "Sujeci\u00f3n qu\u00edmica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q070-A",
    "questionId": "exam-sec-2-1-q070",
    "optionLabel": "A",
    "optionText": "Espigas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q070-B",
    "questionId": "exam-sec-2-1-q070",
    "optionLabel": "B",
    "optionText": "Amarres con alambre",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q070-C",
    "questionId": "exam-sec-2-1-q070",
    "optionLabel": "C",
    "optionText": "Clavos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q070-D",
    "questionId": "exam-sec-2-1-q070",
    "optionLabel": "D",
    "optionText": "Tornillos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q071-A",
    "questionId": "exam-sec-2-1-q071",
    "optionLabel": "A",
    "optionText": "Polvo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q071-B",
    "questionId": "exam-sec-2-1-q071",
    "optionLabel": "B",
    "optionText": "Mantas de curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q071-C",
    "questionId": "exam-sec-2-1-q071",
    "optionLabel": "C",
    "optionText": "Exceso de humedad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q071-D",
    "questionId": "exam-sec-2-1-q071",
    "optionLabel": "D",
    "optionText": "Superficies secas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q072-A",
    "questionId": "exam-sec-2-1-q072",
    "optionLabel": "A",
    "optionText": "Tefl\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q072-B",
    "questionId": "exam-sec-2-1-q072",
    "optionLabel": "B",
    "optionText": "Silic\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q072-C",
    "questionId": "exam-sec-2-1-q072",
    "optionLabel": "C",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q072-D",
    "questionId": "exam-sec-2-1-q072",
    "optionLabel": "D",
    "optionText": "L\u00e1tex",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q073-A",
    "questionId": "exam-sec-2-1-q073",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q073-B",
    "questionId": "exam-sec-2-1-q073",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q074-A",
    "questionId": "exam-sec-2-1-q074",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q074-B",
    "questionId": "exam-sec-2-1-q074",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q075-A",
    "questionId": "exam-sec-2-1-q075",
    "optionLabel": "A",
    "optionText": "Descascarillado del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q075-B",
    "questionId": "exam-sec-2-1-q075",
    "optionLabel": "B",
    "optionText": "Favorece la aplicaci\u00f3n posterior de elementos de acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q075-C",
    "questionId": "exam-sec-2-1-q075",
    "optionLabel": "C",
    "optionText": "No deja residuos en el panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q075-D",
    "questionId": "exam-sec-2-1-q075",
    "optionLabel": "D",
    "optionText": "Deja residuos en el panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q076-A",
    "questionId": "exam-sec-2-1-q076",
    "optionLabel": "A",
    "optionText": "A presi\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q076-B",
    "questionId": "exam-sec-2-1-q076",
    "optionLabel": "B",
    "optionText": "Con cepillado manual",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q076-C",
    "questionId": "exam-sec-2-1-q076",
    "optionLabel": "C",
    "optionText": "Con cepillado mec\u00e1nico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q076-D",
    "questionId": "exam-sec-2-1-q076",
    "optionLabel": "D",
    "optionText": "Qu\u00edmico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q077-A",
    "questionId": "exam-sec-2-1-q077",
    "optionLabel": "A",
    "optionText": "ACI 304",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q077-B",
    "questionId": "exam-sec-2-1-q077",
    "optionLabel": "B",
    "optionText": "ACI 306",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q077-C",
    "questionId": "exam-sec-2-1-q077",
    "optionLabel": "C",
    "optionText": "ACI 320",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q077-D",
    "questionId": "exam-sec-2-1-q077",
    "optionLabel": "D",
    "optionText": "ACI 318",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q078-A",
    "questionId": "exam-sec-2-1-q078",
    "optionLabel": "A",
    "optionText": "Evitan que el concreto forme cavidades",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q078-B",
    "questionId": "exam-sec-2-1-q078",
    "optionLabel": "B",
    "optionText": "Garantizan la posici\u00f3n del refuerzo dentro del panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q078-C",
    "questionId": "exam-sec-2-1-q078",
    "optionLabel": "C",
    "optionText": "Sirven como punto de apoyo para los trabajadores durante la obra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q078-D",
    "questionId": "exam-sec-2-1-q078",
    "optionLabel": "D",
    "optionText": "Sirven para marcar donde se posicionaran las barras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q079-A",
    "questionId": "exam-sec-2-1-q079",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q079-B",
    "questionId": "exam-sec-2-1-q079",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q080-A",
    "questionId": "exam-sec-2-1-q080",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q080-B",
    "questionId": "exam-sec-2-1-q080",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q081-A",
    "questionId": "exam-sec-2-1-q081",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q081-B",
    "questionId": "exam-sec-2-1-q081",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q082-A",
    "questionId": "exam-sec-2-1-q082",
    "optionLabel": "A",
    "optionText": "No",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q082-B",
    "questionId": "exam-sec-2-1-q082",
    "optionLabel": "B",
    "optionText": "Solo en caso de presencia de oxido en el acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q082-C",
    "questionId": "exam-sec-2-1-q082",
    "optionLabel": "C",
    "optionText": "Solo en casos particulares",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q082-D",
    "questionId": "exam-sec-2-1-q082",
    "optionLabel": "D",
    "optionText": "Si",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q083-A",
    "questionId": "exam-sec-2-1-q083",
    "optionLabel": "A",
    "optionText": "Moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q083-B",
    "questionId": "exam-sec-2-1-q083",
    "optionLabel": "B",
    "optionText": "Clavos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q083-C",
    "questionId": "exam-sec-2-1-q083",
    "optionLabel": "C",
    "optionText": "Insertos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q083-D",
    "questionId": "exam-sec-2-1-q083",
    "optionLabel": "D",
    "optionText": "Tapetes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q084-A",
    "questionId": "exam-sec-2-1-q084",
    "optionLabel": "A",
    "optionText": "Despu\u00e9s de la colocaci\u00f3n del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q084-B",
    "questionId": "exam-sec-2-1-q084",
    "optionLabel": "B",
    "optionText": "Durante el colado del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q084-C",
    "questionId": "exam-sec-2-1-q084",
    "optionLabel": "C",
    "optionText": "Durante o inmediatamente despu\u00e9s de la colocaci\u00f3n del refuerzo de acero",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q084-D",
    "questionId": "exam-sec-2-1-q084",
    "optionLabel": "D",
    "optionText": "Antes de la colocaci\u00f3n del refuerzo de acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q085-A",
    "questionId": "exam-sec-2-1-q085",
    "optionLabel": "A",
    "optionText": "10.5",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q085-B",
    "questionId": "exam-sec-2-1-q085",
    "optionLabel": "B",
    "optionText": "7.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q085-C",
    "questionId": "exam-sec-2-1-q085",
    "optionLabel": "C",
    "optionText": "8.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q085-D",
    "questionId": "exam-sec-2-1-q085",
    "optionLabel": "D",
    "optionText": "9.5",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q086-A",
    "questionId": "exam-sec-2-1-q086",
    "optionLabel": "A",
    "optionText": "Colocaci\u00f3n y levantamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q086-B",
    "questionId": "exam-sec-2-1-q086",
    "optionLabel": "B",
    "optionText": "Refuerzo y arriostramiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q086-C",
    "questionId": "exam-sec-2-1-q086",
    "optionLabel": "C",
    "optionText": "Levantamiento y arriostramiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q086-D",
    "questionId": "exam-sec-2-1-q086",
    "optionLabel": "D",
    "optionText": "Colocaci\u00f3n y refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q087-A",
    "questionId": "exam-sec-2-1-q087",
    "optionLabel": "A",
    "optionText": "M\u00e1s o menos 30 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q087-B",
    "questionId": "exam-sec-2-1-q087",
    "optionLabel": "B",
    "optionText": "M\u00e1s o menos 25 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q087-C",
    "questionId": "exam-sec-2-1-q087",
    "optionLabel": "C",
    "optionText": "M\u00e1s o menos 20 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q087-D",
    "questionId": "exam-sec-2-1-q087",
    "optionLabel": "D",
    "optionText": "M\u00e1s o menos 35 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q088-A",
    "questionId": "exam-sec-2-1-q088",
    "optionLabel": "A",
    "optionText": "Viento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q088-B",
    "questionId": "exam-sec-2-1-q088",
    "optionLabel": "B",
    "optionText": "Servicio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q088-C",
    "questionId": "exam-sec-2-1-q088",
    "optionLabel": "C",
    "optionText": "Colocaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q088-D",
    "questionId": "exam-sec-2-1-q088",
    "optionLabel": "D",
    "optionText": "Puntuales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q089-A",
    "questionId": "exam-sec-2-1-q089",
    "optionLabel": "A",
    "optionText": "Placas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q089-B",
    "questionId": "exam-sec-2-1-q089",
    "optionLabel": "B",
    "optionText": "Moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q089-C",
    "questionId": "exam-sec-2-1-q089",
    "optionLabel": "C",
    "optionText": "Riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q089-D",
    "questionId": "exam-sec-2-1-q089",
    "optionLabel": "D",
    "optionText": "Puntales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q090-A",
    "questionId": "exam-sec-2-1-q090",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q090-B",
    "questionId": "exam-sec-2-1-q090",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q091-A",
    "questionId": "exam-sec-2-1-q091",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-1-q091-B",
    "questionId": "exam-sec-2-1-q091",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q092-A",
    "questionId": "exam-sec-2-1-q092",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-1-q092-B",
    "questionId": "exam-sec-2-1-q092",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q001-A",
    "questionId": "exam-sec-2-5-q001",
    "optionLabel": "A",
    "optionText": "Losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q001-B",
    "questionId": "exam-sec-2-5-q001",
    "optionLabel": "B",
    "optionText": "Base",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q001-C",
    "questionId": "exam-sec-2-5-q001",
    "optionLabel": "C",
    "optionText": "Cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q001-D",
    "questionId": "exam-sec-2-5-q001",
    "optionLabel": "D",
    "optionText": "Subrasante",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q002-A",
    "questionId": "exam-sec-2-5-q002",
    "optionLabel": "A",
    "optionText": "Plantilla",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q002-B",
    "questionId": "exam-sec-2-5-q002",
    "optionLabel": "B",
    "optionText": "Cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q002-C",
    "questionId": "exam-sec-2-5-q002",
    "optionLabel": "C",
    "optionText": "Subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q002-D",
    "questionId": "exam-sec-2-5-q002",
    "optionLabel": "D",
    "optionText": "Base",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q003-A",
    "questionId": "exam-sec-2-5-q003",
    "optionLabel": "A",
    "optionText": "Cargas de servicio y construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q003-B",
    "questionId": "exam-sec-2-5-q003",
    "optionLabel": "B",
    "optionText": "Requerimientos del modulo de ruptura  y el modulo de la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q003-C",
    "questionId": "exam-sec-2-5-q003",
    "optionLabel": "C",
    "optionText": "Control de calidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q003-D",
    "questionId": "exam-sec-2-5-q003",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q004-A",
    "questionId": "exam-sec-2-5-q004",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q004-B",
    "questionId": "exam-sec-2-5-q004",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q005-A",
    "questionId": "exam-sec-2-5-q005",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q005-B",
    "questionId": "exam-sec-2-5-q005",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q006-A",
    "questionId": "exam-sec-2-5-q006",
    "optionLabel": "A",
    "optionText": "Donde se cuelan los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q006-B",
    "questionId": "exam-sec-2-5-q006",
    "optionLabel": "B",
    "optionText": "En la cimentaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q006-C",
    "questionId": "exam-sec-2-5-q006",
    "optionLabel": "C",
    "optionText": "Donde van colocados los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q006-D",
    "questionId": "exam-sec-2-5-q006",
    "optionLabel": "D",
    "optionText": "Donde se sujetan las riostras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q007-A",
    "questionId": "exam-sec-2-5-q007",
    "optionLabel": "A",
    "optionText": "Cargas de mobiliario",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q007-B",
    "questionId": "exam-sec-2-5-q007",
    "optionLabel": "B",
    "optionText": "Revestimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q007-C",
    "questionId": "exam-sec-2-5-q007",
    "optionLabel": "C",
    "optionText": "Paso de montacargas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q007-D",
    "questionId": "exam-sec-2-5-q007",
    "optionLabel": "D",
    "optionText": "Almacenamiento de materiales de construcci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q008-A",
    "questionId": "exam-sec-2-5-q008",
    "optionLabel": "A",
    "optionText": "Trabajadores y refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q008-B",
    "questionId": "exam-sec-2-5-q008",
    "optionLabel": "B",
    "optionText": "Gr\u00faas y camiones",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q008-C",
    "questionId": "exam-sec-2-5-q008",
    "optionLabel": "C",
    "optionText": "Almacenamiento de materiales de construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q008-D",
    "questionId": "exam-sec-2-5-q008",
    "optionLabel": "D",
    "optionText": "Colado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q009-A",
    "questionId": "exam-sec-2-5-q009",
    "optionLabel": "A",
    "optionText": "Colado de paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q009-B",
    "questionId": "exam-sec-2-5-q009",
    "optionLabel": "B",
    "optionText": "Arriostramiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q009-C",
    "questionId": "exam-sec-2-5-q009",
    "optionLabel": "C",
    "optionText": "Almacenamiento de materiales de construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q009-D",
    "questionId": "exam-sec-2-5-q009",
    "optionLabel": "D",
    "optionText": "Paso de montacargas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q010-A",
    "questionId": "exam-sec-2-5-q010",
    "optionLabel": "A",
    "optionText": "36 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q010-B",
    "questionId": "exam-sec-2-5-q010",
    "optionLabel": "B",
    "optionText": "35 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q010-C",
    "questionId": "exam-sec-2-5-q010",
    "optionLabel": "C",
    "optionText": "39 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q010-D",
    "questionId": "exam-sec-2-5-q010",
    "optionLabel": "D",
    "optionText": "38 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q011-A",
    "questionId": "exam-sec-2-5-q011",
    "optionLabel": "A",
    "optionText": "Propicia una mayor cantidad de grietas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q011-B",
    "questionId": "exam-sec-2-5-q011",
    "optionLabel": "B",
    "optionText": "Propicia una menor cantidad de grietas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q011-C",
    "questionId": "exam-sec-2-5-q011",
    "optionLabel": "C",
    "optionText": "El ancho de cada grieta individual se reduce.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q011-D",
    "questionId": "exam-sec-2-5-q011",
    "optionLabel": "D",
    "optionText": "El ancho de cada grieta individual aumenta.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q012-A",
    "questionId": "exam-sec-2-5-q012",
    "optionLabel": "A",
    "optionText": "Cantidad de acero para resistir la compresi\u00f3n del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q012-B",
    "questionId": "exam-sec-2-5-q012",
    "optionLabel": "B",
    "optionText": "Cantidad de acero para resistir la contracci\u00f3n del concreto",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q012-C",
    "questionId": "exam-sec-2-5-q012",
    "optionLabel": "C",
    "optionText": "Cantidad de acero para resistir la tensi\u00f3n del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q012-D",
    "questionId": "exam-sec-2-5-q012",
    "optionLabel": "D",
    "optionText": "Cantidad de acero para resistir la flexi\u00f3n del concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q013-A",
    "questionId": "exam-sec-2-5-q013",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q013-B",
    "questionId": "exam-sec-2-5-q013",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q014-A",
    "questionId": "exam-sec-2-5-q014",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q014-B",
    "questionId": "exam-sec-2-5-q014",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q015-A",
    "questionId": "exam-sec-2-5-q015",
    "optionLabel": "A",
    "optionText": "Aumentar el espaciado entre juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q015-B",
    "questionId": "exam-sec-2-5-q015",
    "optionLabel": "B",
    "optionText": "Aumentar el ancho de juntas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q015-C",
    "questionId": "exam-sec-2-5-q015",
    "optionLabel": "C",
    "optionText": "Reducir el espaciado entre juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q015-D",
    "questionId": "exam-sec-2-5-q015",
    "optionLabel": "D",
    "optionText": "Reducir la necesidad de juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q016-A",
    "questionId": "exam-sec-2-5-q016",
    "optionLabel": "A",
    "optionText": "Compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q016-B",
    "questionId": "exam-sec-2-5-q016",
    "optionLabel": "B",
    "optionText": "Combadura",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q016-C",
    "questionId": "exam-sec-2-5-q016",
    "optionLabel": "C",
    "optionText": "Refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q016-D",
    "questionId": "exam-sec-2-5-q016",
    "optionLabel": "D",
    "optionText": "Resistencia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q017-A",
    "questionId": "exam-sec-2-5-q017",
    "optionLabel": "A",
    "optionText": "Juntas enchavetadas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q017-B",
    "questionId": "exam-sec-2-5-q017",
    "optionLabel": "B",
    "optionText": "Juntas aserradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q017-C",
    "questionId": "exam-sec-2-5-q017",
    "optionLabel": "C",
    "optionText": "Juntas de control",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q017-D",
    "questionId": "exam-sec-2-5-q017",
    "optionLabel": "D",
    "optionText": "Juntas de tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q018-A",
    "questionId": "exam-sec-2-5-q018",
    "optionLabel": "A",
    "optionText": "Juntas enchavetadas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q018-B",
    "questionId": "exam-sec-2-5-q018",
    "optionLabel": "B",
    "optionText": "Juntas a tope",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q018-C",
    "questionId": "exam-sec-2-5-q018",
    "optionLabel": "C",
    "optionText": "Juntas de concreto prefabricado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q018-D",
    "questionId": "exam-sec-2-5-q018",
    "optionLabel": "D",
    "optionText": "Juntas de aislamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q019-A",
    "questionId": "exam-sec-2-5-q019",
    "optionLabel": "A",
    "optionText": "Juntas enchavetadas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q019-B",
    "questionId": "exam-sec-2-5-q019",
    "optionLabel": "B",
    "optionText": "Juntas aserradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q019-C",
    "questionId": "exam-sec-2-5-q019",
    "optionLabel": "C",
    "optionText": "Juntas de control",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q019-D",
    "questionId": "exam-sec-2-5-q019",
    "optionLabel": "D",
    "optionText": "Juntas de aislamiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q020-A",
    "questionId": "exam-sec-2-5-q020",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q020-B",
    "questionId": "exam-sec-2-5-q020",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q021-A",
    "questionId": "exam-sec-2-5-q021",
    "optionLabel": "A",
    "optionText": "Franjas de tableros",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q021-B",
    "questionId": "exam-sec-2-5-q021",
    "optionLabel": "B",
    "optionText": "Juntas aserradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q021-C",
    "questionId": "exam-sec-2-5-q021",
    "optionLabel": "C",
    "optionText": "Juntas de control",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q021-D",
    "questionId": "exam-sec-2-5-q021",
    "optionLabel": "D",
    "optionText": "Juntas aisladas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q022-A",
    "questionId": "exam-sec-2-5-q022",
    "optionLabel": "A",
    "optionText": "Enrasadores laser",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q022-B",
    "questionId": "exam-sec-2-5-q022",
    "optionLabel": "B",
    "optionText": "Juntas aisladas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q022-C",
    "questionId": "exam-sec-2-5-q022",
    "optionLabel": "C",
    "optionText": "Juntas de tope",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q022-D",
    "questionId": "exam-sec-2-5-q022",
    "optionLabel": "D",
    "optionText": "Franjas de tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q023-A",
    "questionId": "exam-sec-2-5-q023",
    "optionLabel": "A",
    "optionText": "En entradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q023-B",
    "questionId": "exam-sec-2-5-q023",
    "optionLabel": "B",
    "optionText": "En cambios abruptos de dimensiones",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q023-C",
    "questionId": "exam-sec-2-5-q023",
    "optionLabel": "C",
    "optionText": "En salidas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q023-D",
    "questionId": "exam-sec-2-5-q023",
    "optionLabel": "D",
    "optionText": "Entre cimentaciones y la losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q024-A",
    "questionId": "exam-sec-2-5-q024",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q024-B",
    "questionId": "exam-sec-2-5-q024",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q025-A",
    "questionId": "exam-sec-2-5-q025",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q025-B",
    "questionId": "exam-sec-2-5-q025",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q026-A",
    "questionId": "exam-sec-2-5-q026",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q026-B",
    "questionId": "exam-sec-2-5-q026",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q027-A",
    "questionId": "exam-sec-2-5-q027",
    "optionLabel": "A",
    "optionText": "Aplanadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q027-B",
    "questionId": "exam-sec-2-5-q027",
    "optionLabel": "B",
    "optionText": "Gr\u00faa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q027-C",
    "questionId": "exam-sec-2-5-q027",
    "optionLabel": "C",
    "optionText": "Llanas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q027-D",
    "questionId": "exam-sec-2-5-q027",
    "optionLabel": "D",
    "optionText": "Dragas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q028-A",
    "questionId": "exam-sec-2-5-q028",
    "optionLabel": "A",
    "optionText": "Raz\u00f3n H/T",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q028-B",
    "questionId": "exam-sec-2-5-q028",
    "optionLabel": "B",
    "optionText": "Teor\u00eda de arrastre",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q028-C",
    "questionId": "exam-sec-2-5-q028",
    "optionLabel": "C",
    "optionText": "F-Number",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q028-D",
    "questionId": "exam-sec-2-5-q028",
    "optionLabel": "D",
    "optionText": "CTE",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q029-A",
    "questionId": "exam-sec-2-5-q029",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q029-B",
    "questionId": "exam-sec-2-5-q029",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q030-A",
    "questionId": "exam-sec-2-5-q030",
    "optionLabel": "A",
    "optionText": "0.4",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q030-B",
    "questionId": "exam-sec-2-5-q030",
    "optionLabel": "B",
    "optionText": "0.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q030-C",
    "questionId": "exam-sec-2-5-q030",
    "optionLabel": "C",
    "optionText": "0.3",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q030-D",
    "questionId": "exam-sec-2-5-q030",
    "optionLabel": "D",
    "optionText": "0.15",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q031-A",
    "questionId": "exam-sec-2-5-q031",
    "optionLabel": "A",
    "optionText": "Barrido vertical",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q031-B",
    "questionId": "exam-sec-2-5-q031",
    "optionLabel": "B",
    "optionText": "Doble cepillado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q031-C",
    "questionId": "exam-sec-2-5-q031",
    "optionLabel": "C",
    "optionText": "Agua bajo presi\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q031-D",
    "questionId": "exam-sec-2-5-q031",
    "optionLabel": "D",
    "optionText": "El\u00e9ctrico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q032-A",
    "questionId": "exam-sec-2-5-q032",
    "optionLabel": "A",
    "optionText": "Donde van los muros de carga",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q032-B",
    "questionId": "exam-sec-2-5-q032",
    "optionLabel": "B",
    "optionText": "Solo en el per\u00edmetro del edificio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q032-C",
    "questionId": "exam-sec-2-5-q032",
    "optionLabel": "C",
    "optionText": "A lo largo de las juntas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q032-D",
    "questionId": "exam-sec-2-5-q032",
    "optionLabel": "D",
    "optionText": "En entradas y salidas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q033-A",
    "questionId": "exam-sec-2-5-q033",
    "optionLabel": "A",
    "optionText": "Antes de erigir los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q033-B",
    "questionId": "exam-sec-2-5-q033",
    "optionLabel": "B",
    "optionText": "Despu\u00e9s de erigir los paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q033-C",
    "questionId": "exam-sec-2-5-q033",
    "optionLabel": "C",
    "optionText": "Despu\u00e9s de retirar el material de relleno",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q033-D",
    "questionId": "exam-sec-2-5-q033",
    "optionLabel": "D",
    "optionText": "Antes de retirar los insertos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q034-A",
    "questionId": "exam-sec-2-5-q034",
    "optionLabel": "A",
    "optionText": "11 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q034-B",
    "questionId": "exam-sec-2-5-q034",
    "optionLabel": "B",
    "optionText": "15 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q034-C",
    "questionId": "exam-sec-2-5-q034",
    "optionLabel": "C",
    "optionText": "13 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q034-D",
    "questionId": "exam-sec-2-5-q034",
    "optionLabel": "D",
    "optionText": "12 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q035-A",
    "questionId": "exam-sec-2-5-q035",
    "optionLabel": "A",
    "optionText": "Logar\u00edtmica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q035-B",
    "questionId": "exam-sec-2-5-q035",
    "optionLabel": "B",
    "optionText": "Resistencia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q035-C",
    "questionId": "exam-sec-2-5-q035",
    "optionLabel": "C",
    "optionText": "Exponencial",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q035-D",
    "questionId": "exam-sec-2-5-q035",
    "optionLabel": "D",
    "optionText": "Inversamente proporcional",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q036-A",
    "questionId": "exam-sec-2-5-q036",
    "optionLabel": "A",
    "optionText": "1 a 3 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q036-B",
    "questionId": "exam-sec-2-5-q036",
    "optionLabel": "B",
    "optionText": "2.5 a 3 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q036-C",
    "questionId": "exam-sec-2-5-q036",
    "optionLabel": "C",
    "optionText": "1.5 a 3 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q036-D",
    "questionId": "exam-sec-2-5-q036",
    "optionLabel": "D",
    "optionText": "1.5 a 2 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q037-A",
    "questionId": "exam-sec-2-5-q037",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q037-B",
    "questionId": "exam-sec-2-5-q037",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q038-A",
    "questionId": "exam-sec-2-5-q038",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q038-B",
    "questionId": "exam-sec-2-5-q038",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q039-A",
    "questionId": "exam-sec-2-5-q039",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q039-B",
    "questionId": "exam-sec-2-5-q039",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q040-A",
    "questionId": "exam-sec-2-5-q040",
    "optionLabel": "A",
    "optionText": "En la conexi\u00f3n panel-losa de piso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q040-B",
    "questionId": "exam-sec-2-5-q040",
    "optionLabel": "B",
    "optionText": "En la conexi\u00f3n panel-losa de techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q040-C",
    "questionId": "exam-sec-2-5-q040",
    "optionLabel": "C",
    "optionText": "En las juntas de la losa",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q040-D",
    "questionId": "exam-sec-2-5-q040",
    "optionLabel": "D",
    "optionText": "En las juntas de los paneles",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q041-A",
    "questionId": "exam-sec-2-5-q041",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q041-B",
    "questionId": "exam-sec-2-5-q041",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q042-A",
    "questionId": "exam-sec-2-5-q042",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q042-B",
    "questionId": "exam-sec-2-5-q042",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q043-A",
    "questionId": "exam-sec-2-5-q043",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q043-B",
    "questionId": "exam-sec-2-5-q043",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q044-A",
    "questionId": "exam-sec-2-5-q044",
    "optionLabel": "A",
    "optionText": "400 a 500 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q044-B",
    "questionId": "exam-sec-2-5-q044",
    "optionLabel": "B",
    "optionText": "200 a 500 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q044-C",
    "questionId": "exam-sec-2-5-q044",
    "optionLabel": "C",
    "optionText": "300 a 600 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q044-D",
    "questionId": "exam-sec-2-5-q044",
    "optionLabel": "D",
    "optionText": "400 a 700 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q045-A",
    "questionId": "exam-sec-2-5-q045",
    "optionLabel": "A",
    "optionText": "Perpendicular",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q045-B",
    "questionId": "exam-sec-2-5-q045",
    "optionLabel": "B",
    "optionText": "Embebidas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q045-C",
    "questionId": "exam-sec-2-5-q045",
    "optionLabel": "C",
    "optionText": "Permanente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q045-D",
    "questionId": "exam-sec-2-5-q045",
    "optionLabel": "D",
    "optionText": "Temporal",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q046-A",
    "questionId": "exam-sec-2-5-q046",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q046-B",
    "questionId": "exam-sec-2-5-q046",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q047-A",
    "questionId": "exam-sec-2-5-q047",
    "optionLabel": "A",
    "optionText": "Arena",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q047-B",
    "questionId": "exam-sec-2-5-q047",
    "optionLabel": "B",
    "optionText": "Aluminio",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q047-C",
    "questionId": "exam-sec-2-5-q047",
    "optionLabel": "C",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q047-D",
    "questionId": "exam-sec-2-5-q047",
    "optionLabel": "D",
    "optionText": "Tablaroca",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q048-A",
    "questionId": "exam-sec-2-5-q048",
    "optionLabel": "A",
    "optionText": "De 2 a 3 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q048-B",
    "questionId": "exam-sec-2-5-q048",
    "optionLabel": "B",
    "optionText": "De 2.1 a 3.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q048-C",
    "questionId": "exam-sec-2-5-q048",
    "optionLabel": "C",
    "optionText": "De 1 a 1.2 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q048-D",
    "questionId": "exam-sec-2-5-q048",
    "optionLabel": "D",
    "optionText": "De 0.5 a 2 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q049-A",
    "questionId": "exam-sec-2-5-q049",
    "optionLabel": "A",
    "optionText": "Desmoldante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q049-B",
    "questionId": "exam-sec-2-5-q049",
    "optionLabel": "B",
    "optionText": "Aceite",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q049-C",
    "questionId": "exam-sec-2-5-q049",
    "optionLabel": "C",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q049-D",
    "questionId": "exam-sec-2-5-q049",
    "optionLabel": "D",
    "optionText": "Poliuretano",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q050-A",
    "questionId": "exam-sec-2-5-q050",
    "optionLabel": "A",
    "optionText": "Canales de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q050-B",
    "questionId": "exam-sec-2-5-q050",
    "optionLabel": "B",
    "optionText": "Forros de moldes",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q050-C",
    "questionId": "exam-sec-2-5-q050",
    "optionLabel": "C",
    "optionText": "Hendiduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q050-D",
    "questionId": "exam-sec-2-5-q050",
    "optionLabel": "D",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q051-A",
    "questionId": "exam-sec-2-5-q051",
    "optionLabel": "A",
    "optionText": "Canales de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q051-B",
    "questionId": "exam-sec-2-5-q051",
    "optionLabel": "B",
    "optionText": "Forros de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q051-C",
    "questionId": "exam-sec-2-5-q051",
    "optionLabel": "C",
    "optionText": "Hendiduras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q051-D",
    "questionId": "exam-sec-2-5-q051",
    "optionLabel": "D",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q052-A",
    "questionId": "exam-sec-2-5-q052",
    "optionLabel": "A",
    "optionText": "Molduras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q052-B",
    "questionId": "exam-sec-2-5-q052",
    "optionLabel": "B",
    "optionText": "Canales de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q052-C",
    "questionId": "exam-sec-2-5-q052",
    "optionLabel": "C",
    "optionText": "Hendiduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q052-D",
    "questionId": "exam-sec-2-5-q052",
    "optionLabel": "D",
    "optionText": "Forros de moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q053-A",
    "questionId": "exam-sec-2-5-q053",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q053-B",
    "questionId": "exam-sec-2-5-q053",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q054-A",
    "questionId": "exam-sec-2-5-q054",
    "optionLabel": "A",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q054-B",
    "questionId": "exam-sec-2-5-q054",
    "optionLabel": "B",
    "optionText": "Hendiduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q054-C",
    "questionId": "exam-sec-2-5-q054",
    "optionLabel": "C",
    "optionText": "Puertas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q054-D",
    "questionId": "exam-sec-2-5-q054",
    "optionLabel": "D",
    "optionText": "Ventanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q055-A",
    "questionId": "exam-sec-2-5-q055",
    "optionLabel": "A",
    "optionText": "Molduras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q055-B",
    "questionId": "exam-sec-2-5-q055",
    "optionLabel": "B",
    "optionText": "Puertas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q055-C",
    "questionId": "exam-sec-2-5-q055",
    "optionLabel": "C",
    "optionText": "Ventanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q055-D",
    "questionId": "exam-sec-2-5-q055",
    "optionLabel": "D",
    "optionText": "Conexiones y hendiduras para instalaciones",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q056-A",
    "questionId": "exam-sec-2-5-q056",
    "optionLabel": "A",
    "optionText": "Son cavidades en las caras de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q056-B",
    "questionId": "exam-sec-2-5-q056",
    "optionLabel": "B",
    "optionText": "Son columnas de concreto reforzadas en el panel que sean m\u00e1s gruesas que el grosor general del panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q056-C",
    "questionId": "exam-sec-2-5-q056",
    "optionLabel": "C",
    "optionText": "Es una textura de rastrillado en las caras de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q056-D",
    "questionId": "exam-sec-2-5-q056",
    "optionLabel": "D",
    "optionText": "Es un tipo de moldura para lo bordes de los paneles",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q057-A",
    "questionId": "exam-sec-2-5-q057",
    "optionLabel": "A",
    "optionText": "Para delimitar tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q057-B",
    "questionId": "exam-sec-2-5-q057",
    "optionLabel": "B",
    "optionText": "Como material de moldaje",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q057-C",
    "questionId": "exam-sec-2-5-q057",
    "optionLabel": "C",
    "optionText": "Como refuerzo estructural",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q057-D",
    "questionId": "exam-sec-2-5-q057",
    "optionLabel": "D",
    "optionText": "Como forma de acabado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q058-A",
    "questionId": "exam-sec-2-5-q058",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q058-B",
    "questionId": "exam-sec-2-5-q058",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q059-A",
    "questionId": "exam-sec-2-5-q059",
    "optionLabel": "A",
    "optionText": "80 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q059-B",
    "questionId": "exam-sec-2-5-q059",
    "optionLabel": "B",
    "optionText": "85 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q059-C",
    "questionId": "exam-sec-2-5-q059",
    "optionLabel": "C",
    "optionText": "70 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q059-D",
    "questionId": "exam-sec-2-5-q059",
    "optionLabel": "D",
    "optionText": "75 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q060-A",
    "questionId": "exam-sec-2-5-q060",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q060-B",
    "questionId": "exam-sec-2-5-q060",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q061-A",
    "questionId": "exam-sec-2-5-q061",
    "optionLabel": "A",
    "optionText": "Los dos paneles de las esquinas se moldean hacia adentro",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q061-B",
    "questionId": "exam-sec-2-5-q061",
    "optionLabel": "B",
    "optionText": "Con las ubicaciones de soporte del molde.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q061-C",
    "questionId": "exam-sec-2-5-q061",
    "optionLabel": "C",
    "optionText": "Se pueden llenar con un material apropiado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q061-D",
    "questionId": "exam-sec-2-5-q061",
    "optionLabel": "D",
    "optionText": "Se cuelga alrededor de los puntos altos ocasionados por el agregado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q062-A",
    "questionId": "exam-sec-2-5-q062",
    "optionLabel": "A",
    "optionText": "Espaciadores para soporte",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q062-B",
    "questionId": "exam-sec-2-5-q062",
    "optionLabel": "B",
    "optionText": "Riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q062-C",
    "questionId": "exam-sec-2-5-q062",
    "optionLabel": "C",
    "optionText": "Cizallas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q062-D",
    "questionId": "exam-sec-2-5-q062",
    "optionLabel": "D",
    "optionText": "Llanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q063-A",
    "questionId": "exam-sec-2-5-q063",
    "optionLabel": "A",
    "optionText": "Abrazaderas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q063-B",
    "questionId": "exam-sec-2-5-q063",
    "optionLabel": "B",
    "optionText": "Tableros",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q063-C",
    "questionId": "exam-sec-2-5-q063",
    "optionLabel": "C",
    "optionText": "Juntas de construcci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q063-D",
    "questionId": "exam-sec-2-5-q063",
    "optionLabel": "D",
    "optionText": "Moldaje hermanado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q064-A",
    "questionId": "exam-sec-2-5-q064",
    "optionLabel": "A",
    "optionText": "En paneles con cavidades",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q064-B",
    "questionId": "exam-sec-2-5-q064",
    "optionLabel": "B",
    "optionText": "En puertas y ventanas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q064-C",
    "questionId": "exam-sec-2-5-q064",
    "optionLabel": "C",
    "optionText": "En paneles cuya altura sea mayor a 34 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q064-D",
    "questionId": "exam-sec-2-5-q064",
    "optionLabel": "D",
    "optionText": "En curvas equivalentes en plano o juntas desplazadas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q065-A",
    "questionId": "exam-sec-2-5-q065",
    "optionLabel": "A",
    "optionText": "Paneles de diferentes dimensiones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q065-B",
    "questionId": "exam-sec-2-5-q065",
    "optionLabel": "B",
    "optionText": "Paneles de media asta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q065-C",
    "questionId": "exam-sec-2-5-q065",
    "optionLabel": "C",
    "optionText": "Paneles con grosor menor al promedio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q065-D",
    "questionId": "exam-sec-2-5-q065",
    "optionLabel": "D",
    "optionText": "Paneles y aberturas circulares, con \u00e1ngulos complejos y convergentes.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q066-A",
    "questionId": "exam-sec-2-5-q066",
    "optionLabel": "A",
    "optionText": "Paneles curvos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q066-B",
    "questionId": "exam-sec-2-5-q066",
    "optionLabel": "B",
    "optionText": "Paneles de media asta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q066-C",
    "questionId": "exam-sec-2-5-q066",
    "optionLabel": "C",
    "optionText": "Paneles con grosor menor al promedio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q066-D",
    "questionId": "exam-sec-2-5-q066",
    "optionLabel": "D",
    "optionText": "Paneles angulares",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q067-A",
    "questionId": "exam-sec-2-5-q067",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q067-B",
    "questionId": "exam-sec-2-5-q067",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q068-A",
    "questionId": "exam-sec-2-5-q068",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q068-B",
    "questionId": "exam-sec-2-5-q068",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q069-A",
    "questionId": "exam-sec-2-5-q069",
    "optionLabel": "A",
    "optionText": "Adhesivos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q069-B",
    "questionId": "exam-sec-2-5-q069",
    "optionLabel": "B",
    "optionText": "Sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q069-C",
    "questionId": "exam-sec-2-5-q069",
    "optionLabel": "C",
    "optionText": "Sujeci\u00f3n mec\u00e1nica",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q069-D",
    "questionId": "exam-sec-2-5-q069",
    "optionLabel": "D",
    "optionText": "Sujeci\u00f3n qu\u00edmica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q070-A",
    "questionId": "exam-sec-2-5-q070",
    "optionLabel": "A",
    "optionText": "Espigas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q070-B",
    "questionId": "exam-sec-2-5-q070",
    "optionLabel": "B",
    "optionText": "Amarres con alambre",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q070-C",
    "questionId": "exam-sec-2-5-q070",
    "optionLabel": "C",
    "optionText": "Clavos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q070-D",
    "questionId": "exam-sec-2-5-q070",
    "optionLabel": "D",
    "optionText": "Tornillos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q071-A",
    "questionId": "exam-sec-2-5-q071",
    "optionLabel": "A",
    "optionText": "Polvo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q071-B",
    "questionId": "exam-sec-2-5-q071",
    "optionLabel": "B",
    "optionText": "Mantas de curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q071-C",
    "questionId": "exam-sec-2-5-q071",
    "optionLabel": "C",
    "optionText": "Exceso de humedad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q071-D",
    "questionId": "exam-sec-2-5-q071",
    "optionLabel": "D",
    "optionText": "Superficies secas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q072-A",
    "questionId": "exam-sec-2-5-q072",
    "optionLabel": "A",
    "optionText": "Tefl\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q072-B",
    "questionId": "exam-sec-2-5-q072",
    "optionLabel": "B",
    "optionText": "Silic\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q072-C",
    "questionId": "exam-sec-2-5-q072",
    "optionLabel": "C",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q072-D",
    "questionId": "exam-sec-2-5-q072",
    "optionLabel": "D",
    "optionText": "L\u00e1tex",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q073-A",
    "questionId": "exam-sec-2-5-q073",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q073-B",
    "questionId": "exam-sec-2-5-q073",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q074-A",
    "questionId": "exam-sec-2-5-q074",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q074-B",
    "questionId": "exam-sec-2-5-q074",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q075-A",
    "questionId": "exam-sec-2-5-q075",
    "optionLabel": "A",
    "optionText": "Descascarillado del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q075-B",
    "questionId": "exam-sec-2-5-q075",
    "optionLabel": "B",
    "optionText": "Favorece la aplicaci\u00f3n posterior de elementos de acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q075-C",
    "questionId": "exam-sec-2-5-q075",
    "optionLabel": "C",
    "optionText": "No deja residuos en el panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q075-D",
    "questionId": "exam-sec-2-5-q075",
    "optionLabel": "D",
    "optionText": "Deja residuos en el panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q076-A",
    "questionId": "exam-sec-2-5-q076",
    "optionLabel": "A",
    "optionText": "A presi\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q076-B",
    "questionId": "exam-sec-2-5-q076",
    "optionLabel": "B",
    "optionText": "Con cepillado manual",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q076-C",
    "questionId": "exam-sec-2-5-q076",
    "optionLabel": "C",
    "optionText": "Con cepillado mec\u00e1nico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q076-D",
    "questionId": "exam-sec-2-5-q076",
    "optionLabel": "D",
    "optionText": "Qu\u00edmico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q077-A",
    "questionId": "exam-sec-2-5-q077",
    "optionLabel": "A",
    "optionText": "ACI 304",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q077-B",
    "questionId": "exam-sec-2-5-q077",
    "optionLabel": "B",
    "optionText": "ACI 306",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q077-C",
    "questionId": "exam-sec-2-5-q077",
    "optionLabel": "C",
    "optionText": "ACI 320",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q077-D",
    "questionId": "exam-sec-2-5-q077",
    "optionLabel": "D",
    "optionText": "ACI 318",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q078-A",
    "questionId": "exam-sec-2-5-q078",
    "optionLabel": "A",
    "optionText": "Evitan que el concreto forme cavidades",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q078-B",
    "questionId": "exam-sec-2-5-q078",
    "optionLabel": "B",
    "optionText": "Garantizan la posici\u00f3n del refuerzo dentro del panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q078-C",
    "questionId": "exam-sec-2-5-q078",
    "optionLabel": "C",
    "optionText": "Sirven como punto de apoyo para los trabajadores durante la obra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q078-D",
    "questionId": "exam-sec-2-5-q078",
    "optionLabel": "D",
    "optionText": "Sirven para marcar donde se posicionaran las barras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q079-A",
    "questionId": "exam-sec-2-5-q079",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q079-B",
    "questionId": "exam-sec-2-5-q079",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q080-A",
    "questionId": "exam-sec-2-5-q080",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q080-B",
    "questionId": "exam-sec-2-5-q080",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q081-A",
    "questionId": "exam-sec-2-5-q081",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q081-B",
    "questionId": "exam-sec-2-5-q081",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q082-A",
    "questionId": "exam-sec-2-5-q082",
    "optionLabel": "A",
    "optionText": "No",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q082-B",
    "questionId": "exam-sec-2-5-q082",
    "optionLabel": "B",
    "optionText": "Solo en caso de presencia de oxido en el acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q082-C",
    "questionId": "exam-sec-2-5-q082",
    "optionLabel": "C",
    "optionText": "Solo en casos particulares",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q082-D",
    "questionId": "exam-sec-2-5-q082",
    "optionLabel": "D",
    "optionText": "Si",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q083-A",
    "questionId": "exam-sec-2-5-q083",
    "optionLabel": "A",
    "optionText": "Moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q083-B",
    "questionId": "exam-sec-2-5-q083",
    "optionLabel": "B",
    "optionText": "Clavos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q083-C",
    "questionId": "exam-sec-2-5-q083",
    "optionLabel": "C",
    "optionText": "Insertos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q083-D",
    "questionId": "exam-sec-2-5-q083",
    "optionLabel": "D",
    "optionText": "Tapetes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q084-A",
    "questionId": "exam-sec-2-5-q084",
    "optionLabel": "A",
    "optionText": "Despu\u00e9s de la colocaci\u00f3n del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q084-B",
    "questionId": "exam-sec-2-5-q084",
    "optionLabel": "B",
    "optionText": "Durante el colado del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q084-C",
    "questionId": "exam-sec-2-5-q084",
    "optionLabel": "C",
    "optionText": "Durante o inmediatamente despu\u00e9s de la colocaci\u00f3n del refuerzo de acero",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q084-D",
    "questionId": "exam-sec-2-5-q084",
    "optionLabel": "D",
    "optionText": "Antes de la colocaci\u00f3n del refuerzo de acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q085-A",
    "questionId": "exam-sec-2-5-q085",
    "optionLabel": "A",
    "optionText": "10.5",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q085-B",
    "questionId": "exam-sec-2-5-q085",
    "optionLabel": "B",
    "optionText": "7.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q085-C",
    "questionId": "exam-sec-2-5-q085",
    "optionLabel": "C",
    "optionText": "8.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q085-D",
    "questionId": "exam-sec-2-5-q085",
    "optionLabel": "D",
    "optionText": "9.5",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q086-A",
    "questionId": "exam-sec-2-5-q086",
    "optionLabel": "A",
    "optionText": "Colocaci\u00f3n y levantamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q086-B",
    "questionId": "exam-sec-2-5-q086",
    "optionLabel": "B",
    "optionText": "Refuerzo y arriostramiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q086-C",
    "questionId": "exam-sec-2-5-q086",
    "optionLabel": "C",
    "optionText": "Levantamiento y arriostramiento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q086-D",
    "questionId": "exam-sec-2-5-q086",
    "optionLabel": "D",
    "optionText": "Colocaci\u00f3n y refuerzo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q087-A",
    "questionId": "exam-sec-2-5-q087",
    "optionLabel": "A",
    "optionText": "M\u00e1s o menos 30 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q087-B",
    "questionId": "exam-sec-2-5-q087",
    "optionLabel": "B",
    "optionText": "M\u00e1s o menos 25 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q087-C",
    "questionId": "exam-sec-2-5-q087",
    "optionLabel": "C",
    "optionText": "M\u00e1s o menos 20 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q087-D",
    "questionId": "exam-sec-2-5-q087",
    "optionLabel": "D",
    "optionText": "M\u00e1s o menos 35 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q088-A",
    "questionId": "exam-sec-2-5-q088",
    "optionLabel": "A",
    "optionText": "Viento",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q088-B",
    "questionId": "exam-sec-2-5-q088",
    "optionLabel": "B",
    "optionText": "Servicio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q088-C",
    "questionId": "exam-sec-2-5-q088",
    "optionLabel": "C",
    "optionText": "Colocaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q088-D",
    "questionId": "exam-sec-2-5-q088",
    "optionLabel": "D",
    "optionText": "Puntuales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q089-A",
    "questionId": "exam-sec-2-5-q089",
    "optionLabel": "A",
    "optionText": "Placas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q089-B",
    "questionId": "exam-sec-2-5-q089",
    "optionLabel": "B",
    "optionText": "Moldes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q089-C",
    "questionId": "exam-sec-2-5-q089",
    "optionLabel": "C",
    "optionText": "Riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q089-D",
    "questionId": "exam-sec-2-5-q089",
    "optionLabel": "D",
    "optionText": "Puntales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q090-A",
    "questionId": "exam-sec-2-5-q090",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q090-B",
    "questionId": "exam-sec-2-5-q090",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q091-A",
    "questionId": "exam-sec-2-5-q091",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-2-5-q091-B",
    "questionId": "exam-sec-2-5-q091",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q092-A",
    "questionId": "exam-sec-2-5-q092",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-2-5-q092-B",
    "questionId": "exam-sec-2-5-q092",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q001-A",
    "questionId": "exam-sec-3-1-q001",
    "optionLabel": "A",
    "optionText": "15 a  25 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q001-B",
    "questionId": "exam-sec-3-1-q001",
    "optionLabel": "B",
    "optionText": "10 a  20 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q001-C",
    "questionId": "exam-sec-3-1-q001",
    "optionLabel": "C",
    "optionText": "5 a  20 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q001-D",
    "questionId": "exam-sec-3-1-q001",
    "optionLabel": "D",
    "optionText": "15 a  20 min",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q002-A",
    "questionId": "exam-sec-3-1-q002",
    "optionLabel": "A",
    "optionText": "6 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q002-B",
    "questionId": "exam-sec-3-1-q002",
    "optionLabel": "B",
    "optionText": "8 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q002-C",
    "questionId": "exam-sec-3-1-q002",
    "optionLabel": "C",
    "optionText": "2 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q002-D",
    "questionId": "exam-sec-3-1-q002",
    "optionLabel": "D",
    "optionText": "4 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q003-A",
    "questionId": "exam-sec-3-1-q003",
    "optionLabel": "A",
    "optionText": "Es f\u00e1cil de operar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q003-B",
    "questionId": "exam-sec-3-1-q003",
    "optionLabel": "B",
    "optionText": "Es de f\u00e1cil disponibilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q003-C",
    "questionId": "exam-sec-3-1-q003",
    "optionLabel": "C",
    "optionText": "Necesita de precauciones especiales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q003-D",
    "questionId": "exam-sec-3-1-q003",
    "optionLabel": "D",
    "optionText": "Es mas lento que el bombeo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q004-A",
    "questionId": "exam-sec-3-1-q004",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q004-B",
    "questionId": "exam-sec-3-1-q004",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q005-A",
    "questionId": "exam-sec-3-1-q005",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q005-B",
    "questionId": "exam-sec-3-1-q005",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q006-A",
    "questionId": "exam-sec-3-1-q006",
    "optionLabel": "A",
    "optionText": "En la esquina cercana al pr\u00f3ximo panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q006-B",
    "questionId": "exam-sec-3-1-q006",
    "optionLabel": "B",
    "optionText": "Al centro del lado mas corto del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q006-C",
    "questionId": "exam-sec-3-1-q006",
    "optionLabel": "C",
    "optionText": "Al centro del lado mas largo del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q006-D",
    "questionId": "exam-sec-3-1-q006",
    "optionLabel": "D",
    "optionText": "En una esquina",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q007-A",
    "questionId": "exam-sec-3-1-q007",
    "optionLabel": "A",
    "optionText": "Disminuye la segregaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q007-B",
    "questionId": "exam-sec-3-1-q007",
    "optionLabel": "B",
    "optionText": "Facilita el desmolde",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q007-C",
    "questionId": "exam-sec-3-1-q007",
    "optionLabel": "C",
    "optionText": "Asegura la consolidaci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q007-D",
    "questionId": "exam-sec-3-1-q007",
    "optionLabel": "D",
    "optionText": "Ayuda a tener un acabado perfecto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q008-A",
    "questionId": "exam-sec-3-1-q008",
    "optionLabel": "A",
    "optionText": "Facilita el desmolde",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q008-B",
    "questionId": "exam-sec-3-1-q008",
    "optionLabel": "B",
    "optionText": "Ocasiona que el agregado grueso se asiente",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q008-C",
    "questionId": "exam-sec-3-1-q008",
    "optionLabel": "C",
    "optionText": "Asegura la consolidaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q008-D",
    "questionId": "exam-sec-3-1-q008",
    "optionLabel": "D",
    "optionText": "Ayuda a tener un acabado perfecto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q009-A",
    "questionId": "exam-sec-3-1-q009",
    "optionLabel": "A",
    "optionText": "Asegurando el espesor del aislamiento del muro de manera eficiente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q009-B",
    "questionId": "exam-sec-3-1-q009",
    "optionLabel": "B",
    "optionText": "Asegurando el espesor de la imposta del muro de manera eficiente",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q009-C",
    "questionId": "exam-sec-3-1-q009",
    "optionLabel": "C",
    "optionText": "Asegurando el espesor total del muro de manera eficiente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q009-D",
    "questionId": "exam-sec-3-1-q009",
    "optionLabel": "D",
    "optionText": "Asegurando el espesor medio del muro de manera eficiente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q010-A",
    "questionId": "exam-sec-3-1-q010",
    "optionLabel": "A",
    "optionText": "En la primera cama de concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q010-B",
    "questionId": "exam-sec-3-1-q010",
    "optionLabel": "B",
    "optionText": "Despu\u00e9s del aislamiento antes de la segunda ronda de concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q010-C",
    "questionId": "exam-sec-3-1-q010",
    "optionLabel": "C",
    "optionText": "Antes de colocar la primera capa de colado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q010-D",
    "questionId": "exam-sec-3-1-q010",
    "optionLabel": "D",
    "optionText": "Mientras el concreto aun este liquido",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q011-A",
    "questionId": "exam-sec-3-1-q011",
    "optionLabel": "A",
    "optionText": "125 a 175 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q011-B",
    "questionId": "exam-sec-3-1-q011",
    "optionLabel": "B",
    "optionText": "155 a 175 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q011-C",
    "questionId": "exam-sec-3-1-q011",
    "optionLabel": "C",
    "optionText": "155 a 255 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q011-D",
    "questionId": "exam-sec-3-1-q011",
    "optionLabel": "D",
    "optionText": "175 a 255 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q012-A",
    "questionId": "exam-sec-3-1-q012",
    "optionLabel": "A",
    "optionText": "0.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q012-B",
    "questionId": "exam-sec-3-1-q012",
    "optionLabel": "B",
    "optionText": "0.25",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q012-C",
    "questionId": "exam-sec-3-1-q012",
    "optionLabel": "C",
    "optionText": "0.75",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q012-D",
    "questionId": "exam-sec-3-1-q012",
    "optionLabel": "D",
    "optionText": "0.3",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q013-A",
    "questionId": "exam-sec-3-1-q013",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q013-B",
    "questionId": "exam-sec-3-1-q013",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q014-A",
    "questionId": "exam-sec-3-1-q014",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q014-B",
    "questionId": "exam-sec-3-1-q014",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q015-A",
    "questionId": "exam-sec-3-1-q015",
    "optionLabel": "A",
    "optionText": "Llana",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q015-B",
    "questionId": "exam-sec-3-1-q015",
    "optionLabel": "B",
    "optionText": "Vibrador de empuje",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q015-C",
    "questionId": "exam-sec-3-1-q015",
    "optionLabel": "C",
    "optionText": "Flotadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q015-D",
    "questionId": "exam-sec-3-1-q015",
    "optionLabel": "D",
    "optionText": "Aplanadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q016-A",
    "questionId": "exam-sec-3-1-q016",
    "optionLabel": "A",
    "optionText": "Un orificio peque\u00f1o para la conexi\u00f3n del cable que gira sobre una bola",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q016-B",
    "questionId": "exam-sec-3-1-q016",
    "optionLabel": "B",
    "optionText": "Un orificio grande para la conexi\u00f3n del cable que gira sobre una bola",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q016-C",
    "questionId": "exam-sec-3-1-q016",
    "optionLabel": "C",
    "optionText": "Un orificio peque\u00f1o para la conexi\u00f3n de la riostra que gira sobre una bola",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q016-D",
    "questionId": "exam-sec-3-1-q016",
    "optionLabel": "D",
    "optionText": "Un orificio grande para la conexi\u00f3n de la riostra que gira sobre una bola",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q017-A",
    "questionId": "exam-sec-3-1-q017",
    "optionLabel": "A",
    "optionText": "Barra separadora",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q017-B",
    "questionId": "exam-sec-3-1-q017",
    "optionLabel": "B",
    "optionText": "Riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q017-C",
    "questionId": "exam-sec-3-1-q017",
    "optionLabel": "C",
    "optionText": "Sujeci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q017-D",
    "questionId": "exam-sec-3-1-q017",
    "optionLabel": "D",
    "optionText": "Conexi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q018-A",
    "questionId": "exam-sec-3-1-q018",
    "optionLabel": "A",
    "optionText": "Riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q018-B",
    "questionId": "exam-sec-3-1-q018",
    "optionLabel": "B",
    "optionText": "Poleas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q018-C",
    "questionId": "exam-sec-3-1-q018",
    "optionLabel": "C",
    "optionText": "Barra separadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q018-D",
    "questionId": "exam-sec-3-1-q018",
    "optionLabel": "D",
    "optionText": "Sujeci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q019-A",
    "questionId": "exam-sec-3-1-q019",
    "optionLabel": "A",
    "optionText": "Levantar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q019-B",
    "questionId": "exam-sec-3-1-q019",
    "optionLabel": "B",
    "optionText": "Sujetar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q019-C",
    "questionId": "exam-sec-3-1-q019",
    "optionLabel": "C",
    "optionText": "Colocar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q019-D",
    "questionId": "exam-sec-3-1-q019",
    "optionLabel": "D",
    "optionText": "Encaminar",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q020-A",
    "questionId": "exam-sec-3-1-q020",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q020-B",
    "questionId": "exam-sec-3-1-q020",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q021-A",
    "questionId": "exam-sec-3-1-q021",
    "optionLabel": "A",
    "optionText": "Larguero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q021-B",
    "questionId": "exam-sec-3-1-q021",
    "optionLabel": "B",
    "optionText": "Aparejo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q021-C",
    "questionId": "exam-sec-3-1-q021",
    "optionLabel": "C",
    "optionText": "Riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q021-D",
    "questionId": "exam-sec-3-1-q021",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q022-A",
    "questionId": "exam-sec-3-1-q022",
    "optionLabel": "A",
    "optionText": "Un par de minutos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q022-B",
    "questionId": "exam-sec-3-1-q022",
    "optionLabel": "B",
    "optionText": "5 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q022-C",
    "questionId": "exam-sec-3-1-q022",
    "optionLabel": "C",
    "optionText": "Algunos segundos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q022-D",
    "questionId": "exam-sec-3-1-q022",
    "optionLabel": "D",
    "optionText": "2 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q023-A",
    "questionId": "exam-sec-3-1-q023",
    "optionLabel": "A",
    "optionText": "Poleas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q023-B",
    "questionId": "exam-sec-3-1-q023",
    "optionLabel": "B",
    "optionText": "Riostras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q023-C",
    "questionId": "exam-sec-3-1-q023",
    "optionLabel": "C",
    "optionText": "Sujeciones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q023-D",
    "questionId": "exam-sec-3-1-q023",
    "optionLabel": "D",
    "optionText": "Conexiones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q024-A",
    "questionId": "exam-sec-3-1-q024",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q024-B",
    "questionId": "exam-sec-3-1-q024",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q025-A",
    "questionId": "exam-sec-3-1-q025",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q025-B",
    "questionId": "exam-sec-3-1-q025",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q026-A",
    "questionId": "exam-sec-3-1-q026",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q026-B",
    "questionId": "exam-sec-3-1-q026",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q027-A",
    "questionId": "exam-sec-3-1-q027",
    "optionLabel": "A",
    "optionText": "Medio inferior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q027-B",
    "questionId": "exam-sec-3-1-q027",
    "optionLabel": "B",
    "optionText": "Medio interior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q027-C",
    "questionId": "exam-sec-3-1-q027",
    "optionLabel": "C",
    "optionText": "Extremo inferior",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q027-D",
    "questionId": "exam-sec-3-1-q027",
    "optionLabel": "D",
    "optionText": "Extremo interior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q028-A",
    "questionId": "exam-sec-3-1-q028",
    "optionLabel": "A",
    "optionText": "40.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q028-B",
    "questionId": "exam-sec-3-1-q028",
    "optionLabel": "B",
    "optionText": "25.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q028-C",
    "questionId": "exam-sec-3-1-q028",
    "optionLabel": "C",
    "optionText": "30.5 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q028-D",
    "questionId": "exam-sec-3-1-q028",
    "optionLabel": "D",
    "optionText": "35.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q029-A",
    "questionId": "exam-sec-3-1-q029",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q029-B",
    "questionId": "exam-sec-3-1-q029",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q030-A",
    "questionId": "exam-sec-3-1-q030",
    "optionLabel": "A",
    "optionText": "17 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q030-B",
    "questionId": "exam-sec-3-1-q030",
    "optionLabel": "B",
    "optionText": "18 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q030-C",
    "questionId": "exam-sec-3-1-q030",
    "optionLabel": "C",
    "optionText": "19 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q030-D",
    "questionId": "exam-sec-3-1-q030",
    "optionLabel": "D",
    "optionText": "20 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q031-A",
    "questionId": "exam-sec-3-1-q031",
    "optionLabel": "A",
    "optionText": "Reciclado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q031-B",
    "questionId": "exam-sec-3-1-q031",
    "optionLabel": "B",
    "optionText": "Reutilizable",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q031-C",
    "questionId": "exam-sec-3-1-q031",
    "optionLabel": "C",
    "optionText": "Temporal",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q031-D",
    "questionId": "exam-sec-3-1-q031",
    "optionLabel": "D",
    "optionText": "Permanente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q032-A",
    "questionId": "exam-sec-3-1-q032",
    "optionLabel": "A",
    "optionText": "Losa de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q032-B",
    "questionId": "exam-sec-3-1-q032",
    "optionLabel": "B",
    "optionText": "Panel adyacente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q032-C",
    "questionId": "exam-sec-3-1-q032",
    "optionLabel": "C",
    "optionText": "Panel de techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q032-D",
    "questionId": "exam-sec-3-1-q032",
    "optionLabel": "D",
    "optionText": "El siguiente panel en la serie",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q033-A",
    "questionId": "exam-sec-3-1-q033",
    "optionLabel": "A",
    "optionText": "Herrajes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q033-B",
    "questionId": "exam-sec-3-1-q033",
    "optionLabel": "B",
    "optionText": "Exclusiones de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q033-C",
    "questionId": "exam-sec-3-1-q033",
    "optionLabel": "C",
    "optionText": "Sujeciones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q033-D",
    "questionId": "exam-sec-3-1-q033",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q034-A",
    "questionId": "exam-sec-3-1-q034",
    "optionLabel": "A",
    "optionText": "Las riostras de dos paneles adyacentes pueden evitarse si interfieren unas con otras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q034-B",
    "questionId": "exam-sec-3-1-q034",
    "optionLabel": "B",
    "optionText": "Las riostras de dos paneles adyacentes pueden alternarse si interfieren unas con otras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q034-C",
    "questionId": "exam-sec-3-1-q034",
    "optionLabel": "C",
    "optionText": "Las riostras de dos paneles adyacentes pueden entrecruzarse e interferir unas con otras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q034-D",
    "questionId": "exam-sec-3-1-q034",
    "optionLabel": "D",
    "optionText": "Las riostras de dos paneles adyacentes pueden romperse o interferir unas con otras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q035-A",
    "questionId": "exam-sec-3-1-q035",
    "optionLabel": "A",
    "optionText": "Almohadilla de soporte",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q035-B",
    "questionId": "exam-sec-3-1-q035",
    "optionLabel": "B",
    "optionText": "Soporte de la riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q035-C",
    "questionId": "exam-sec-3-1-q035",
    "optionLabel": "C",
    "optionText": "Pata de la riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q035-D",
    "questionId": "exam-sec-3-1-q035",
    "optionLabel": "D",
    "optionText": "Bloques de anclaje",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q036-A",
    "questionId": "exam-sec-3-1-q036",
    "optionLabel": "A",
    "optionText": "Cada 2 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q036-B",
    "questionId": "exam-sec-3-1-q036",
    "optionLabel": "B",
    "optionText": "Dos veces al d\u00eda",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q036-C",
    "questionId": "exam-sec-3-1-q036",
    "optionLabel": "C",
    "optionText": "Una vez los d\u00edas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q036-D",
    "questionId": "exam-sec-3-1-q036",
    "optionLabel": "D",
    "optionText": "3 veces a lo largo de su tiempo de uso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q037-A",
    "questionId": "exam-sec-3-1-q037",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q037-B",
    "questionId": "exam-sec-3-1-q037",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q038-A",
    "questionId": "exam-sec-3-1-q038",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q038-B",
    "questionId": "exam-sec-3-1-q038",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q039-A",
    "questionId": "exam-sec-3-1-q039",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q039-B",
    "questionId": "exam-sec-3-1-q039",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q040-A",
    "questionId": "exam-sec-3-1-q040",
    "optionLabel": "A",
    "optionText": "El cable conectado a insertos de techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q040-B",
    "questionId": "exam-sec-3-1-q040",
    "optionLabel": "B",
    "optionText": "El cable conectado a insertos laterales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q040-C",
    "questionId": "exam-sec-3-1-q040",
    "optionLabel": "C",
    "optionText": "El cable conectado a insertos horizontales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q040-D",
    "questionId": "exam-sec-3-1-q040",
    "optionLabel": "D",
    "optionText": "El cable conectado a insertos equivocados",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q041-A",
    "questionId": "exam-sec-3-1-q041",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q041-B",
    "questionId": "exam-sec-3-1-q041",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q042-A",
    "questionId": "exam-sec-3-1-q042",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q042-B",
    "questionId": "exam-sec-3-1-q042",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q043-A",
    "questionId": "exam-sec-3-1-q043",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q043-B",
    "questionId": "exam-sec-3-1-q043",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q044-A",
    "questionId": "exam-sec-3-1-q044",
    "optionLabel": "A",
    "optionText": "Muros perimetrales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q044-B",
    "questionId": "exam-sec-3-1-q044",
    "optionLabel": "B",
    "optionText": "Muros divisorios",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q044-C",
    "questionId": "exam-sec-3-1-q044",
    "optionLabel": "C",
    "optionText": "Muros de retenci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q044-D",
    "questionId": "exam-sec-3-1-q044",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q045-A",
    "questionId": "exam-sec-3-1-q045",
    "optionLabel": "A",
    "optionText": "5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q045-B",
    "questionId": "exam-sec-3-1-q045",
    "optionLabel": "B",
    "optionText": "6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q045-C",
    "questionId": "exam-sec-3-1-q045",
    "optionLabel": "C",
    "optionText": "7",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q045-D",
    "questionId": "exam-sec-3-1-q045",
    "optionLabel": "D",
    "optionText": "8",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q046-A",
    "questionId": "exam-sec-3-1-q046",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q046-B",
    "questionId": "exam-sec-3-1-q046",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q047-A",
    "questionId": "exam-sec-3-1-q047",
    "optionLabel": "A",
    "optionText": "\u00c1ngulos de 180\u00b0",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q047-B",
    "questionId": "exam-sec-3-1-q047",
    "optionLabel": "B",
    "optionText": "\u00c1ngulos continuos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q047-C",
    "questionId": "exam-sec-3-1-q047",
    "optionLabel": "C",
    "optionText": "\u00c1ngulos de 90\u00b0",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q047-D",
    "questionId": "exam-sec-3-1-q047",
    "optionLabel": "D",
    "optionText": "\u00c1ngulos discontinuos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q048-A",
    "questionId": "exam-sec-3-1-q048",
    "optionLabel": "A",
    "optionText": "Fibra de vidrio o acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q048-B",
    "questionId": "exam-sec-3-1-q048",
    "optionLabel": "B",
    "optionText": "Fibra de vidrio o aluminio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q048-C",
    "questionId": "exam-sec-3-1-q048",
    "optionLabel": "C",
    "optionText": "Madera o acero",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q048-D",
    "questionId": "exam-sec-3-1-q048",
    "optionLabel": "D",
    "optionText": "Madera o aluminio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q049-A",
    "questionId": "exam-sec-3-1-q049",
    "optionLabel": "A",
    "optionText": "Alta actividad s\u00edsmica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q049-B",
    "questionId": "exam-sec-3-1-q049",
    "optionLabel": "B",
    "optionText": "Cargas de vientos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q049-C",
    "questionId": "exam-sec-3-1-q049",
    "optionLabel": "C",
    "optionText": "Fuerzas mayores a las soportables por las conexiones a lo largo de un panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q049-D",
    "questionId": "exam-sec-3-1-q049",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q050-A",
    "questionId": "exam-sec-3-1-q050",
    "optionLabel": "A",
    "optionText": "Resistencia a tensi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q050-B",
    "questionId": "exam-sec-3-1-q050",
    "optionLabel": "B",
    "optionText": "Resistencia lateral",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q050-C",
    "questionId": "exam-sec-3-1-q050",
    "optionLabel": "C",
    "optionText": "Resistencia a compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q050-D",
    "questionId": "exam-sec-3-1-q050",
    "optionLabel": "D",
    "optionText": "Resistencia a torsi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q051-A",
    "questionId": "exam-sec-3-1-q051",
    "optionLabel": "A",
    "optionText": "1.19 m o mas por debajo del piso acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q051-B",
    "questionId": "exam-sec-3-1-q051",
    "optionLabel": "B",
    "optionText": "1.20 m o mas por debajo del piso acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q051-C",
    "questionId": "exam-sec-3-1-q051",
    "optionLabel": "C",
    "optionText": "1.21 m o mas por debajo del piso acabado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q051-D",
    "questionId": "exam-sec-3-1-q051",
    "optionLabel": "D",
    "optionText": "1.22 m o mas por debajo del piso acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q052-A",
    "questionId": "exam-sec-3-1-q052",
    "optionLabel": "A",
    "optionText": "Fricci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q052-B",
    "questionId": "exam-sec-3-1-q052",
    "optionLabel": "B",
    "optionText": "Compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q052-C",
    "questionId": "exam-sec-3-1-q052",
    "optionLabel": "C",
    "optionText": "Tensi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q052-D",
    "questionId": "exam-sec-3-1-q052",
    "optionLabel": "D",
    "optionText": "Torsi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q053-A",
    "questionId": "exam-sec-3-1-q053",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q053-B",
    "questionId": "exam-sec-3-1-q053",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q054-A",
    "questionId": "exam-sec-3-1-q054",
    "optionLabel": "A",
    "optionText": "Las cargas de servicio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q054-B",
    "questionId": "exam-sec-3-1-q054",
    "optionLabel": "B",
    "optionText": "Condiciones ambientales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q054-C",
    "questionId": "exam-sec-3-1-q054",
    "optionLabel": "C",
    "optionText": "No restringir el movimiento del panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q054-D",
    "questionId": "exam-sec-3-1-q054",
    "optionLabel": "D",
    "optionText": "Cargas estructurales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q055-A",
    "questionId": "exam-sec-3-1-q055",
    "optionLabel": "A",
    "optionText": "Descascarillamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q055-B",
    "questionId": "exam-sec-3-1-q055",
    "optionLabel": "B",
    "optionText": "Asentamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q055-C",
    "questionId": "exam-sec-3-1-q055",
    "optionLabel": "C",
    "optionText": "Falla por humedad interior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q055-D",
    "questionId": "exam-sec-3-1-q055",
    "optionLabel": "D",
    "optionText": "Fallas en juntas calafateadas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q056-A",
    "questionId": "exam-sec-3-1-q056",
    "optionLabel": "A",
    "optionText": "Juntas de construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q056-B",
    "questionId": "exam-sec-3-1-q056",
    "optionLabel": "B",
    "optionText": "Franjas de cierre",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q056-C",
    "questionId": "exam-sec-3-1-q056",
    "optionLabel": "C",
    "optionText": "Juntas de aislamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q056-D",
    "questionId": "exam-sec-3-1-q056",
    "optionLabel": "D",
    "optionText": "Juntas de tablero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q057-A",
    "questionId": "exam-sec-3-1-q057",
    "optionLabel": "A",
    "optionText": "El relleno mal colocado puede provocar que la losa se desnivele",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q057-B",
    "questionId": "exam-sec-3-1-q057",
    "optionLabel": "B",
    "optionText": "El relleno mal colocado puede provocar que la losa se deslice de su posici\u00f3n original",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q057-C",
    "questionId": "exam-sec-3-1-q057",
    "optionLabel": "C",
    "optionText": "El relleno mal colocado puede provocar que la losa se friccione con las franjas de cierre",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q057-D",
    "questionId": "exam-sec-3-1-q057",
    "optionLabel": "D",
    "optionText": "El relleno mal colocado puede provocar que la losa se agriete",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q058-A",
    "questionId": "exam-sec-3-1-q058",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q058-B",
    "questionId": "exam-sec-3-1-q058",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q059-A",
    "questionId": "exam-sec-3-1-q059",
    "optionLabel": "A",
    "optionText": "Aplicar materiales de recubrimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q059-B",
    "questionId": "exam-sec-3-1-q059",
    "optionLabel": "B",
    "optionText": "Pulir la superficie",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q059-C",
    "questionId": "exam-sec-3-1-q059",
    "optionLabel": "C",
    "optionText": "Aplicar liquido de curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q059-D",
    "questionId": "exam-sec-3-1-q059",
    "optionLabel": "D",
    "optionText": "Limpiar el desmoldante",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q060-A",
    "questionId": "exam-sec-3-1-q060",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q060-B",
    "questionId": "exam-sec-3-1-q060",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q061-A",
    "questionId": "exam-sec-3-1-q061",
    "optionLabel": "A",
    "optionText": "Concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q061-B",
    "questionId": "exam-sec-3-1-q061",
    "optionLabel": "B",
    "optionText": "Lechada",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q061-C",
    "questionId": "exam-sec-3-1-q061",
    "optionLabel": "C",
    "optionText": "Yeso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q061-D",
    "questionId": "exam-sec-3-1-q061",
    "optionLabel": "D",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q062-A",
    "questionId": "exam-sec-3-1-q062",
    "optionLabel": "A",
    "optionText": "Desbastando las aletas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q062-B",
    "questionId": "exam-sec-3-1-q062",
    "optionLabel": "B",
    "optionText": "Rellenando los orificios con mezcla de mortero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q062-C",
    "questionId": "exam-sec-3-1-q062",
    "optionLabel": "C",
    "optionText": "Se lava con agua en \u00e1rea a resanar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q062-D",
    "questionId": "exam-sec-3-1-q062",
    "optionLabel": "D",
    "optionText": "Se raspa el \u00e1rea para dejarla a ras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q063-A",
    "questionId": "exam-sec-3-1-q063",
    "optionLabel": "A",
    "optionText": "Para asegurar una superficie plana",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q063-B",
    "questionId": "exam-sec-3-1-q063",
    "optionLabel": "B",
    "optionText": "Para garantizar la est\u00e9tica del acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q063-C",
    "questionId": "exam-sec-3-1-q063",
    "optionLabel": "C",
    "optionText": "Para sellar herm\u00e9ticamente contra el aire y agua",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q063-D",
    "questionId": "exam-sec-3-1-q063",
    "optionLabel": "D",
    "optionText": "Para homogeneizar las cargas de la estructura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q064-A",
    "questionId": "exam-sec-3-1-q064",
    "optionLabel": "A",
    "optionText": "Limpieza y sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q064-B",
    "questionId": "exam-sec-3-1-q064",
    "optionLabel": "B",
    "optionText": "Sellado y selecci\u00f3n de material",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q064-C",
    "questionId": "exam-sec-3-1-q064",
    "optionLabel": "C",
    "optionText": "Limpieza y colocaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q064-D",
    "questionId": "exam-sec-3-1-q064",
    "optionLabel": "D",
    "optionText": "Selecci\u00f3n de material y limpieza",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q065-A",
    "questionId": "exam-sec-3-1-q065",
    "optionLabel": "A",
    "optionText": "El material de sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q065-B",
    "questionId": "exam-sec-3-1-q065",
    "optionLabel": "B",
    "optionText": "El ancho de la junta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q065-C",
    "questionId": "exam-sec-3-1-q065",
    "optionLabel": "C",
    "optionText": "Si cuenta con refuerzo o no",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q065-D",
    "questionId": "exam-sec-3-1-q065",
    "optionLabel": "D",
    "optionText": "La cantidad de componentes",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q066-A",
    "questionId": "exam-sec-3-1-q066",
    "optionLabel": "A",
    "optionText": "Para que se logre un espesor adecuado de sellado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q066-B",
    "questionId": "exam-sec-3-1-q066",
    "optionLabel": "B",
    "optionText": "Para proteger el refuerzo en caso de haberlo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q066-C",
    "questionId": "exam-sec-3-1-q066",
    "optionLabel": "C",
    "optionText": "Para lograr una junta limpia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q066-D",
    "questionId": "exam-sec-3-1-q066",
    "optionLabel": "D",
    "optionText": "Para permitir una junta flexible",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q067-A",
    "questionId": "exam-sec-3-1-q067",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q067-B",
    "questionId": "exam-sec-3-1-q067",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q068-A",
    "questionId": "exam-sec-3-1-q068",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q068-B",
    "questionId": "exam-sec-3-1-q068",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q069-A",
    "questionId": "exam-sec-3-1-q069",
    "optionLabel": "A",
    "optionText": "20 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q069-B",
    "questionId": "exam-sec-3-1-q069",
    "optionLabel": "B",
    "optionText": "10 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q069-C",
    "questionId": "exam-sec-3-1-q069",
    "optionLabel": "C",
    "optionText": "5 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q069-D",
    "questionId": "exam-sec-3-1-q069",
    "optionLabel": "D",
    "optionText": "15 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q070-A",
    "questionId": "exam-sec-3-1-q070",
    "optionLabel": "A",
    "optionText": "De 5 a 8",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q070-B",
    "questionId": "exam-sec-3-1-q070",
    "optionLabel": "B",
    "optionText": "De 6 a 9",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q070-C",
    "questionId": "exam-sec-3-1-q070",
    "optionLabel": "C",
    "optionText": "De 7 a 10",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q070-D",
    "questionId": "exam-sec-3-1-q070",
    "optionLabel": "D",
    "optionText": "De 8 a 11",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q071-A",
    "questionId": "exam-sec-3-1-q071",
    "optionLabel": "A",
    "optionText": "Fibra de vidrio",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q071-B",
    "questionId": "exam-sec-3-1-q071",
    "optionLabel": "B",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q071-C",
    "questionId": "exam-sec-3-1-q071",
    "optionLabel": "C",
    "optionText": "Acr\u00edlico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q071-D",
    "questionId": "exam-sec-3-1-q071",
    "optionLabel": "D",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q072-A",
    "questionId": "exam-sec-3-1-q072",
    "optionLabel": "A",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q072-B",
    "questionId": "exam-sec-3-1-q072",
    "optionLabel": "B",
    "optionText": "Fibra de vidrio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q072-C",
    "questionId": "exam-sec-3-1-q072",
    "optionLabel": "C",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q072-D",
    "questionId": "exam-sec-3-1-q072",
    "optionLabel": "D",
    "optionText": "Poliestireno",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q073-A",
    "questionId": "exam-sec-3-1-q073",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q073-B",
    "questionId": "exam-sec-3-1-q073",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q074-A",
    "questionId": "exam-sec-3-1-q074",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q074-B",
    "questionId": "exam-sec-3-1-q074",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q075-A",
    "questionId": "exam-sec-3-1-q075",
    "optionLabel": "A",
    "optionText": "Por congelaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q075-B",
    "questionId": "exam-sec-3-1-q075",
    "optionLabel": "B",
    "optionText": "Por delaminaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q075-C",
    "questionId": "exam-sec-3-1-q075",
    "optionLabel": "C",
    "optionText": "Aleatorio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q075-D",
    "questionId": "exam-sec-3-1-q075",
    "optionLabel": "D",
    "optionText": "Pl\u00e1stico",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q076-A",
    "questionId": "exam-sec-3-1-q076",
    "optionLabel": "A",
    "optionText": "0.75 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q076-B",
    "questionId": "exam-sec-3-1-q076",
    "optionLabel": "B",
    "optionText": "1 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q076-C",
    "questionId": "exam-sec-3-1-q076",
    "optionLabel": "C",
    "optionText": "0.50 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q076-D",
    "questionId": "exam-sec-3-1-q076",
    "optionLabel": "D",
    "optionText": "0.25 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q077-A",
    "questionId": "exam-sec-3-1-q077",
    "optionLabel": "A",
    "optionText": "0.50 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q077-B",
    "questionId": "exam-sec-3-1-q077",
    "optionLabel": "B",
    "optionText": "0.75 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q077-C",
    "questionId": "exam-sec-3-1-q077",
    "optionLabel": "C",
    "optionText": "1 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q077-D",
    "questionId": "exam-sec-3-1-q077",
    "optionLabel": "D",
    "optionText": "1.5 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q078-A",
    "questionId": "exam-sec-3-1-q078",
    "optionLabel": "A",
    "optionText": "Una buena compactaci\u00f3n de la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q078-B",
    "questionId": "exam-sec-3-1-q078",
    "optionLabel": "B",
    "optionText": "Bajo revenimiento e hidrataci\u00f3n adecuada",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q078-C",
    "questionId": "exam-sec-3-1-q078",
    "optionLabel": "C",
    "optionText": "Velocidades del viento menores a 8 km/h",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q078-D",
    "questionId": "exam-sec-3-1-q078",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q079-A",
    "questionId": "exam-sec-3-1-q079",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q079-B",
    "questionId": "exam-sec-3-1-q079",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q080-A",
    "questionId": "exam-sec-3-1-q080",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q080-B",
    "questionId": "exam-sec-3-1-q080",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q081-A",
    "questionId": "exam-sec-3-1-q081",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q081-B",
    "questionId": "exam-sec-3-1-q081",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q082-A",
    "questionId": "exam-sec-3-1-q082",
    "optionLabel": "A",
    "optionText": "Descascarillado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q082-B",
    "questionId": "exam-sec-3-1-q082",
    "optionLabel": "B",
    "optionText": "Sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q082-C",
    "questionId": "exam-sec-3-1-q082",
    "optionLabel": "C",
    "optionText": "Asentamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q082-D",
    "questionId": "exam-sec-3-1-q082",
    "optionLabel": "D",
    "optionText": "Escamado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q083-A",
    "questionId": "exam-sec-3-1-q083",
    "optionLabel": "A",
    "optionText": "Descascarillado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q083-B",
    "questionId": "exam-sec-3-1-q083",
    "optionLabel": "B",
    "optionText": "Asentamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q083-C",
    "questionId": "exam-sec-3-1-q083",
    "optionLabel": "C",
    "optionText": "Socavado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q083-D",
    "questionId": "exam-sec-3-1-q083",
    "optionLabel": "D",
    "optionText": "Escamado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q084-A",
    "questionId": "exam-sec-3-1-q084",
    "optionLabel": "A",
    "optionText": "Con parches de lechada",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q084-B",
    "questionId": "exam-sec-3-1-q084",
    "optionLabel": "B",
    "optionText": "Con una inyecci\u00f3n de epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q084-C",
    "questionId": "exam-sec-3-1-q084",
    "optionLabel": "C",
    "optionText": "Con lonas de fibra de carbono",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q084-D",
    "questionId": "exam-sec-3-1-q084",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q085-A",
    "questionId": "exam-sec-3-1-q085",
    "optionLabel": "A",
    "optionText": "En cada esquina de la abertura",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q085-B",
    "questionId": "exam-sec-3-1-q085",
    "optionLabel": "B",
    "optionText": "En la parte superior de la abertura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q085-C",
    "questionId": "exam-sec-3-1-q085",
    "optionLabel": "C",
    "optionText": "En el per\u00edmetro de la abertura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q085-D",
    "questionId": "exam-sec-3-1-q085",
    "optionLabel": "D",
    "optionText": "En la parte inferior de la abertura",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q086-A",
    "questionId": "exam-sec-3-1-q086",
    "optionLabel": "A",
    "optionText": "Grietas diagonales en las aberturas de un panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q086-B",
    "questionId": "exam-sec-3-1-q086",
    "optionLabel": "B",
    "optionText": "Grietas transversales en las esquinas inferiores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q086-C",
    "questionId": "exam-sec-3-1-q086",
    "optionLabel": "C",
    "optionText": "Grietas diagonales en las esquinas inferiores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q086-D",
    "questionId": "exam-sec-3-1-q086",
    "optionLabel": "D",
    "optionText": "Grietas longitudinales a las aberturas de un panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q087-A",
    "questionId": "exam-sec-3-1-q087",
    "optionLabel": "A",
    "optionText": "Agrietamiento diagonal",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q087-B",
    "questionId": "exam-sec-3-1-q087",
    "optionLabel": "B",
    "optionText": "Agrietamiento cuadrado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q087-C",
    "questionId": "exam-sec-3-1-q087",
    "optionLabel": "C",
    "optionText": "Agrietamiento horizontal",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q087-D",
    "questionId": "exam-sec-3-1-q087",
    "optionLabel": "D",
    "optionText": "Agrietamiento vertical",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q088-A",
    "questionId": "exam-sec-3-1-q088",
    "optionLabel": "A",
    "optionText": "Grietas horizontales cerca de una altura media.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q088-B",
    "questionId": "exam-sec-3-1-q088",
    "optionLabel": "B",
    "optionText": "Grietas verticales cerca de una altura media.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q088-C",
    "questionId": "exam-sec-3-1-q088",
    "optionLabel": "C",
    "optionText": "Grietas cuadradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q088-D",
    "questionId": "exam-sec-3-1-q088",
    "optionLabel": "D",
    "optionText": "Grietas Diagonales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q089-A",
    "questionId": "exam-sec-3-1-q089",
    "optionLabel": "A",
    "optionText": "Grietas verticales cerca de una altura media.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q089-B",
    "questionId": "exam-sec-3-1-q089",
    "optionLabel": "B",
    "optionText": "Grietas Diagonales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q089-C",
    "questionId": "exam-sec-3-1-q089",
    "optionLabel": "C",
    "optionText": "Grietas cuadradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q089-D",
    "questionId": "exam-sec-3-1-q089",
    "optionLabel": "D",
    "optionText": "Grietas horizontales cerca de una altura media.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q090-A",
    "questionId": "exam-sec-3-1-q090",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q090-B",
    "questionId": "exam-sec-3-1-q090",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q091-A",
    "questionId": "exam-sec-3-1-q091",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q091-B",
    "questionId": "exam-sec-3-1-q091",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q092-A",
    "questionId": "exam-sec-3-1-q092",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q092-B",
    "questionId": "exam-sec-3-1-q092",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q093-A",
    "questionId": "exam-sec-3-1-q093",
    "optionLabel": "A",
    "optionText": "Mojar el refuerzo antes de colocarse",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q093-B",
    "questionId": "exam-sec-3-1-q093",
    "optionLabel": "B",
    "optionText": "Quitar el agua de exudado antes del curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q093-C",
    "questionId": "exam-sec-3-1-q093",
    "optionLabel": "C",
    "optionText": "Agregar aditivo retardante a la mezcla",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q093-D",
    "questionId": "exam-sec-3-1-q093",
    "optionLabel": "D",
    "optionText": "Aplicar una niebla a la losa de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q094-A",
    "questionId": "exam-sec-3-1-q094",
    "optionLabel": "A",
    "optionText": "Base debajo de la sub rasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q094-B",
    "questionId": "exam-sec-3-1-q094",
    "optionLabel": "B",
    "optionText": "Compactaci\u00f3n adecuada de la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-1-q094-C",
    "questionId": "exam-sec-3-1-q094",
    "optionLabel": "C",
    "optionText": "Zapatas continuas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-1-q094-D",
    "questionId": "exam-sec-3-1-q094",
    "optionLabel": "D",
    "optionText": "Muro de conexi\u00f3n entre la zapata y el panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q001-A",
    "questionId": "exam-sec-3-5-q001",
    "optionLabel": "A",
    "optionText": "15 a  25 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q001-B",
    "questionId": "exam-sec-3-5-q001",
    "optionLabel": "B",
    "optionText": "10 a  20 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q001-C",
    "questionId": "exam-sec-3-5-q001",
    "optionLabel": "C",
    "optionText": "5 a  20 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q001-D",
    "questionId": "exam-sec-3-5-q001",
    "optionLabel": "D",
    "optionText": "15 a  20 min",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q002-A",
    "questionId": "exam-sec-3-5-q002",
    "optionLabel": "A",
    "optionText": "6 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q002-B",
    "questionId": "exam-sec-3-5-q002",
    "optionLabel": "B",
    "optionText": "8 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q002-C",
    "questionId": "exam-sec-3-5-q002",
    "optionLabel": "C",
    "optionText": "2 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q002-D",
    "questionId": "exam-sec-3-5-q002",
    "optionLabel": "D",
    "optionText": "4 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q003-A",
    "questionId": "exam-sec-3-5-q003",
    "optionLabel": "A",
    "optionText": "Es f\u00e1cil de operar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q003-B",
    "questionId": "exam-sec-3-5-q003",
    "optionLabel": "B",
    "optionText": "Es de f\u00e1cil disponibilidad",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q003-C",
    "questionId": "exam-sec-3-5-q003",
    "optionLabel": "C",
    "optionText": "Necesita de precauciones especiales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q003-D",
    "questionId": "exam-sec-3-5-q003",
    "optionLabel": "D",
    "optionText": "Es mas lento que el bombeo",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q004-A",
    "questionId": "exam-sec-3-5-q004",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q004-B",
    "questionId": "exam-sec-3-5-q004",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q005-A",
    "questionId": "exam-sec-3-5-q005",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q005-B",
    "questionId": "exam-sec-3-5-q005",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q006-A",
    "questionId": "exam-sec-3-5-q006",
    "optionLabel": "A",
    "optionText": "En la esquina cercana al pr\u00f3ximo panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q006-B",
    "questionId": "exam-sec-3-5-q006",
    "optionLabel": "B",
    "optionText": "Al centro del lado mas corto del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q006-C",
    "questionId": "exam-sec-3-5-q006",
    "optionLabel": "C",
    "optionText": "Al centro del lado mas largo del panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q006-D",
    "questionId": "exam-sec-3-5-q006",
    "optionLabel": "D",
    "optionText": "En una esquina",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q007-A",
    "questionId": "exam-sec-3-5-q007",
    "optionLabel": "A",
    "optionText": "Disminuye la segregaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q007-B",
    "questionId": "exam-sec-3-5-q007",
    "optionLabel": "B",
    "optionText": "Facilita el desmolde",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q007-C",
    "questionId": "exam-sec-3-5-q007",
    "optionLabel": "C",
    "optionText": "Asegura la consolidaci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q007-D",
    "questionId": "exam-sec-3-5-q007",
    "optionLabel": "D",
    "optionText": "Ayuda a tener un acabado perfecto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q008-A",
    "questionId": "exam-sec-3-5-q008",
    "optionLabel": "A",
    "optionText": "Facilita el desmolde",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q008-B",
    "questionId": "exam-sec-3-5-q008",
    "optionLabel": "B",
    "optionText": "Ocasiona que el agregado grueso se asiente",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q008-C",
    "questionId": "exam-sec-3-5-q008",
    "optionLabel": "C",
    "optionText": "Asegura la consolidaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q008-D",
    "questionId": "exam-sec-3-5-q008",
    "optionLabel": "D",
    "optionText": "Ayuda a tener un acabado perfecto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q009-A",
    "questionId": "exam-sec-3-5-q009",
    "optionLabel": "A",
    "optionText": "Asegurando el espesor del aislamiento del muro de manera eficiente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q009-B",
    "questionId": "exam-sec-3-5-q009",
    "optionLabel": "B",
    "optionText": "Asegurando el espesor de la imposta del muro de manera eficiente",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q009-C",
    "questionId": "exam-sec-3-5-q009",
    "optionLabel": "C",
    "optionText": "Asegurando el espesor total del muro de manera eficiente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q009-D",
    "questionId": "exam-sec-3-5-q009",
    "optionLabel": "D",
    "optionText": "Asegurando el espesor medio del muro de manera eficiente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q010-A",
    "questionId": "exam-sec-3-5-q010",
    "optionLabel": "A",
    "optionText": "En la primera cama de concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q010-B",
    "questionId": "exam-sec-3-5-q010",
    "optionLabel": "B",
    "optionText": "Despu\u00e9s del aislamiento antes de la segunda ronda de concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q010-C",
    "questionId": "exam-sec-3-5-q010",
    "optionLabel": "C",
    "optionText": "Antes de colocar la primera capa de colado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q010-D",
    "questionId": "exam-sec-3-5-q010",
    "optionLabel": "D",
    "optionText": "Mientras el concreto aun este liquido",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q011-A",
    "questionId": "exam-sec-3-5-q011",
    "optionLabel": "A",
    "optionText": "125 a 175 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q011-B",
    "questionId": "exam-sec-3-5-q011",
    "optionLabel": "B",
    "optionText": "155 a 175 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q011-C",
    "questionId": "exam-sec-3-5-q011",
    "optionLabel": "C",
    "optionText": "155 a 255 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q011-D",
    "questionId": "exam-sec-3-5-q011",
    "optionLabel": "D",
    "optionText": "175 a 255 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q012-A",
    "questionId": "exam-sec-3-5-q012",
    "optionLabel": "A",
    "optionText": "0.5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q012-B",
    "questionId": "exam-sec-3-5-q012",
    "optionLabel": "B",
    "optionText": "0.25",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q012-C",
    "questionId": "exam-sec-3-5-q012",
    "optionLabel": "C",
    "optionText": "0.75",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q012-D",
    "questionId": "exam-sec-3-5-q012",
    "optionLabel": "D",
    "optionText": "0.3",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q013-A",
    "questionId": "exam-sec-3-5-q013",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q013-B",
    "questionId": "exam-sec-3-5-q013",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q014-A",
    "questionId": "exam-sec-3-5-q014",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q014-B",
    "questionId": "exam-sec-3-5-q014",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q015-A",
    "questionId": "exam-sec-3-5-q015",
    "optionLabel": "A",
    "optionText": "Llana",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q015-B",
    "questionId": "exam-sec-3-5-q015",
    "optionLabel": "B",
    "optionText": "Vibrador de empuje",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q015-C",
    "questionId": "exam-sec-3-5-q015",
    "optionLabel": "C",
    "optionText": "Flotadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q015-D",
    "questionId": "exam-sec-3-5-q015",
    "optionLabel": "D",
    "optionText": "Aplanadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q016-A",
    "questionId": "exam-sec-3-5-q016",
    "optionLabel": "A",
    "optionText": "Un orificio peque\u00f1o para la conexi\u00f3n del cable que gira sobre una bola",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q016-B",
    "questionId": "exam-sec-3-5-q016",
    "optionLabel": "B",
    "optionText": "Un orificio grande para la conexi\u00f3n del cable que gira sobre una bola",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q016-C",
    "questionId": "exam-sec-3-5-q016",
    "optionLabel": "C",
    "optionText": "Un orificio peque\u00f1o para la conexi\u00f3n de la riostra que gira sobre una bola",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q016-D",
    "questionId": "exam-sec-3-5-q016",
    "optionLabel": "D",
    "optionText": "Un orificio grande para la conexi\u00f3n de la riostra que gira sobre una bola",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q017-A",
    "questionId": "exam-sec-3-5-q017",
    "optionLabel": "A",
    "optionText": "Barra separadora",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q017-B",
    "questionId": "exam-sec-3-5-q017",
    "optionLabel": "B",
    "optionText": "Riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q017-C",
    "questionId": "exam-sec-3-5-q017",
    "optionLabel": "C",
    "optionText": "Sujeci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q017-D",
    "questionId": "exam-sec-3-5-q017",
    "optionLabel": "D",
    "optionText": "Conexi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q018-A",
    "questionId": "exam-sec-3-5-q018",
    "optionLabel": "A",
    "optionText": "Riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q018-B",
    "questionId": "exam-sec-3-5-q018",
    "optionLabel": "B",
    "optionText": "Poleas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q018-C",
    "questionId": "exam-sec-3-5-q018",
    "optionLabel": "C",
    "optionText": "Barra separadora",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q018-D",
    "questionId": "exam-sec-3-5-q018",
    "optionLabel": "D",
    "optionText": "Sujeci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q019-A",
    "questionId": "exam-sec-3-5-q019",
    "optionLabel": "A",
    "optionText": "Levantar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q019-B",
    "questionId": "exam-sec-3-5-q019",
    "optionLabel": "B",
    "optionText": "Sujetar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q019-C",
    "questionId": "exam-sec-3-5-q019",
    "optionLabel": "C",
    "optionText": "Colocar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q019-D",
    "questionId": "exam-sec-3-5-q019",
    "optionLabel": "D",
    "optionText": "Encaminar",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q020-A",
    "questionId": "exam-sec-3-5-q020",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q020-B",
    "questionId": "exam-sec-3-5-q020",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q021-A",
    "questionId": "exam-sec-3-5-q021",
    "optionLabel": "A",
    "optionText": "Larguero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q021-B",
    "questionId": "exam-sec-3-5-q021",
    "optionLabel": "B",
    "optionText": "Aparejo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q021-C",
    "questionId": "exam-sec-3-5-q021",
    "optionLabel": "C",
    "optionText": "Riostras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q021-D",
    "questionId": "exam-sec-3-5-q021",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q022-A",
    "questionId": "exam-sec-3-5-q022",
    "optionLabel": "A",
    "optionText": "Un par de minutos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q022-B",
    "questionId": "exam-sec-3-5-q022",
    "optionLabel": "B",
    "optionText": "5 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q022-C",
    "questionId": "exam-sec-3-5-q022",
    "optionLabel": "C",
    "optionText": "Algunos segundos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q022-D",
    "questionId": "exam-sec-3-5-q022",
    "optionLabel": "D",
    "optionText": "2 min",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q023-A",
    "questionId": "exam-sec-3-5-q023",
    "optionLabel": "A",
    "optionText": "Poleas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q023-B",
    "questionId": "exam-sec-3-5-q023",
    "optionLabel": "B",
    "optionText": "Riostras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q023-C",
    "questionId": "exam-sec-3-5-q023",
    "optionLabel": "C",
    "optionText": "Sujeciones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q023-D",
    "questionId": "exam-sec-3-5-q023",
    "optionLabel": "D",
    "optionText": "Conexiones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q024-A",
    "questionId": "exam-sec-3-5-q024",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q024-B",
    "questionId": "exam-sec-3-5-q024",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q025-A",
    "questionId": "exam-sec-3-5-q025",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q025-B",
    "questionId": "exam-sec-3-5-q025",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q026-A",
    "questionId": "exam-sec-3-5-q026",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q026-B",
    "questionId": "exam-sec-3-5-q026",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q027-A",
    "questionId": "exam-sec-3-5-q027",
    "optionLabel": "A",
    "optionText": "Medio inferior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q027-B",
    "questionId": "exam-sec-3-5-q027",
    "optionLabel": "B",
    "optionText": "Medio interior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q027-C",
    "questionId": "exam-sec-3-5-q027",
    "optionLabel": "C",
    "optionText": "Extremo inferior",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q027-D",
    "questionId": "exam-sec-3-5-q027",
    "optionLabel": "D",
    "optionText": "Extremo interior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q028-A",
    "questionId": "exam-sec-3-5-q028",
    "optionLabel": "A",
    "optionText": "40.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q028-B",
    "questionId": "exam-sec-3-5-q028",
    "optionLabel": "B",
    "optionText": "25.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q028-C",
    "questionId": "exam-sec-3-5-q028",
    "optionLabel": "C",
    "optionText": "30.5 m",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q028-D",
    "questionId": "exam-sec-3-5-q028",
    "optionLabel": "D",
    "optionText": "35.5 m",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q029-A",
    "questionId": "exam-sec-3-5-q029",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q029-B",
    "questionId": "exam-sec-3-5-q029",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q030-A",
    "questionId": "exam-sec-3-5-q030",
    "optionLabel": "A",
    "optionText": "17 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q030-B",
    "questionId": "exam-sec-3-5-q030",
    "optionLabel": "B",
    "optionText": "18 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q030-C",
    "questionId": "exam-sec-3-5-q030",
    "optionLabel": "C",
    "optionText": "19 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q030-D",
    "questionId": "exam-sec-3-5-q030",
    "optionLabel": "D",
    "optionText": "20 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q031-A",
    "questionId": "exam-sec-3-5-q031",
    "optionLabel": "A",
    "optionText": "Reciclado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q031-B",
    "questionId": "exam-sec-3-5-q031",
    "optionLabel": "B",
    "optionText": "Reutilizable",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q031-C",
    "questionId": "exam-sec-3-5-q031",
    "optionLabel": "C",
    "optionText": "Temporal",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q031-D",
    "questionId": "exam-sec-3-5-q031",
    "optionLabel": "D",
    "optionText": "Permanente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q032-A",
    "questionId": "exam-sec-3-5-q032",
    "optionLabel": "A",
    "optionText": "Losa de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q032-B",
    "questionId": "exam-sec-3-5-q032",
    "optionLabel": "B",
    "optionText": "Panel adyacente",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q032-C",
    "questionId": "exam-sec-3-5-q032",
    "optionLabel": "C",
    "optionText": "Panel de techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q032-D",
    "questionId": "exam-sec-3-5-q032",
    "optionLabel": "D",
    "optionText": "El siguiente panel en la serie",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q033-A",
    "questionId": "exam-sec-3-5-q033",
    "optionLabel": "A",
    "optionText": "Herrajes",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q033-B",
    "questionId": "exam-sec-3-5-q033",
    "optionLabel": "B",
    "optionText": "Exclusiones de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q033-C",
    "questionId": "exam-sec-3-5-q033",
    "optionLabel": "C",
    "optionText": "Sujeciones",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q033-D",
    "questionId": "exam-sec-3-5-q033",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q034-A",
    "questionId": "exam-sec-3-5-q034",
    "optionLabel": "A",
    "optionText": "Las riostras de dos paneles adyacentes pueden evitarse si interfieren unas con otras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q034-B",
    "questionId": "exam-sec-3-5-q034",
    "optionLabel": "B",
    "optionText": "Las riostras de dos paneles adyacentes pueden alternarse si interfieren unas con otras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q034-C",
    "questionId": "exam-sec-3-5-q034",
    "optionLabel": "C",
    "optionText": "Las riostras de dos paneles adyacentes pueden entrecruzarse e interferir unas con otras",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q034-D",
    "questionId": "exam-sec-3-5-q034",
    "optionLabel": "D",
    "optionText": "Las riostras de dos paneles adyacentes pueden romperse o interferir unas con otras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q035-A",
    "questionId": "exam-sec-3-5-q035",
    "optionLabel": "A",
    "optionText": "Almohadilla de soporte",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q035-B",
    "questionId": "exam-sec-3-5-q035",
    "optionLabel": "B",
    "optionText": "Soporte de la riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q035-C",
    "questionId": "exam-sec-3-5-q035",
    "optionLabel": "C",
    "optionText": "Pata de la riostra",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q035-D",
    "questionId": "exam-sec-3-5-q035",
    "optionLabel": "D",
    "optionText": "Bloques de anclaje",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q036-A",
    "questionId": "exam-sec-3-5-q036",
    "optionLabel": "A",
    "optionText": "Cada 2 d\u00edas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q036-B",
    "questionId": "exam-sec-3-5-q036",
    "optionLabel": "B",
    "optionText": "Dos veces al d\u00eda",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q036-C",
    "questionId": "exam-sec-3-5-q036",
    "optionLabel": "C",
    "optionText": "Una vez los d\u00edas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q036-D",
    "questionId": "exam-sec-3-5-q036",
    "optionLabel": "D",
    "optionText": "3 veces a lo largo de su tiempo de uso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q037-A",
    "questionId": "exam-sec-3-5-q037",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q037-B",
    "questionId": "exam-sec-3-5-q037",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q038-A",
    "questionId": "exam-sec-3-5-q038",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q038-B",
    "questionId": "exam-sec-3-5-q038",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q039-A",
    "questionId": "exam-sec-3-5-q039",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q039-B",
    "questionId": "exam-sec-3-5-q039",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q040-A",
    "questionId": "exam-sec-3-5-q040",
    "optionLabel": "A",
    "optionText": "El cable conectado a insertos de techo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q040-B",
    "questionId": "exam-sec-3-5-q040",
    "optionLabel": "B",
    "optionText": "El cable conectado a insertos laterales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q040-C",
    "questionId": "exam-sec-3-5-q040",
    "optionLabel": "C",
    "optionText": "El cable conectado a insertos horizontales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q040-D",
    "questionId": "exam-sec-3-5-q040",
    "optionLabel": "D",
    "optionText": "El cable conectado a insertos equivocados",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q041-A",
    "questionId": "exam-sec-3-5-q041",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q041-B",
    "questionId": "exam-sec-3-5-q041",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q042-A",
    "questionId": "exam-sec-3-5-q042",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q042-B",
    "questionId": "exam-sec-3-5-q042",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q043-A",
    "questionId": "exam-sec-3-5-q043",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q043-B",
    "questionId": "exam-sec-3-5-q043",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q044-A",
    "questionId": "exam-sec-3-5-q044",
    "optionLabel": "A",
    "optionText": "Muros perimetrales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q044-B",
    "questionId": "exam-sec-3-5-q044",
    "optionLabel": "B",
    "optionText": "Muros divisorios",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q044-C",
    "questionId": "exam-sec-3-5-q044",
    "optionLabel": "C",
    "optionText": "Muros de retenci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q044-D",
    "questionId": "exam-sec-3-5-q044",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q045-A",
    "questionId": "exam-sec-3-5-q045",
    "optionLabel": "A",
    "optionText": "5",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q045-B",
    "questionId": "exam-sec-3-5-q045",
    "optionLabel": "B",
    "optionText": "6",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q045-C",
    "questionId": "exam-sec-3-5-q045",
    "optionLabel": "C",
    "optionText": "7",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q045-D",
    "questionId": "exam-sec-3-5-q045",
    "optionLabel": "D",
    "optionText": "8",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q046-A",
    "questionId": "exam-sec-3-5-q046",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q046-B",
    "questionId": "exam-sec-3-5-q046",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q047-A",
    "questionId": "exam-sec-3-5-q047",
    "optionLabel": "A",
    "optionText": "\u00c1ngulos de 180\u00b0",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q047-B",
    "questionId": "exam-sec-3-5-q047",
    "optionLabel": "B",
    "optionText": "\u00c1ngulos continuos",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q047-C",
    "questionId": "exam-sec-3-5-q047",
    "optionLabel": "C",
    "optionText": "\u00c1ngulos de 90\u00b0",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q047-D",
    "questionId": "exam-sec-3-5-q047",
    "optionLabel": "D",
    "optionText": "\u00c1ngulos discontinuos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q048-A",
    "questionId": "exam-sec-3-5-q048",
    "optionLabel": "A",
    "optionText": "Fibra de vidrio o acero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q048-B",
    "questionId": "exam-sec-3-5-q048",
    "optionLabel": "B",
    "optionText": "Fibra de vidrio o aluminio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q048-C",
    "questionId": "exam-sec-3-5-q048",
    "optionLabel": "C",
    "optionText": "Madera o acero",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q048-D",
    "questionId": "exam-sec-3-5-q048",
    "optionLabel": "D",
    "optionText": "Madera o aluminio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q049-A",
    "questionId": "exam-sec-3-5-q049",
    "optionLabel": "A",
    "optionText": "Alta actividad s\u00edsmica",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q049-B",
    "questionId": "exam-sec-3-5-q049",
    "optionLabel": "B",
    "optionText": "Cargas de vientos",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q049-C",
    "questionId": "exam-sec-3-5-q049",
    "optionLabel": "C",
    "optionText": "Fuerzas mayores a las soportables por las conexiones a lo largo de un panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q049-D",
    "questionId": "exam-sec-3-5-q049",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q050-A",
    "questionId": "exam-sec-3-5-q050",
    "optionLabel": "A",
    "optionText": "Resistencia a tensi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q050-B",
    "questionId": "exam-sec-3-5-q050",
    "optionLabel": "B",
    "optionText": "Resistencia lateral",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q050-C",
    "questionId": "exam-sec-3-5-q050",
    "optionLabel": "C",
    "optionText": "Resistencia a compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q050-D",
    "questionId": "exam-sec-3-5-q050",
    "optionLabel": "D",
    "optionText": "Resistencia a torsi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q051-A",
    "questionId": "exam-sec-3-5-q051",
    "optionLabel": "A",
    "optionText": "1.19 m o mas por debajo del piso acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q051-B",
    "questionId": "exam-sec-3-5-q051",
    "optionLabel": "B",
    "optionText": "1.20 m o mas por debajo del piso acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q051-C",
    "questionId": "exam-sec-3-5-q051",
    "optionLabel": "C",
    "optionText": "1.21 m o mas por debajo del piso acabado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q051-D",
    "questionId": "exam-sec-3-5-q051",
    "optionLabel": "D",
    "optionText": "1.22 m o mas por debajo del piso acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q052-A",
    "questionId": "exam-sec-3-5-q052",
    "optionLabel": "A",
    "optionText": "Fricci\u00f3n",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q052-B",
    "questionId": "exam-sec-3-5-q052",
    "optionLabel": "B",
    "optionText": "Compresi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q052-C",
    "questionId": "exam-sec-3-5-q052",
    "optionLabel": "C",
    "optionText": "Tensi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q052-D",
    "questionId": "exam-sec-3-5-q052",
    "optionLabel": "D",
    "optionText": "Torsi\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q053-A",
    "questionId": "exam-sec-3-5-q053",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q053-B",
    "questionId": "exam-sec-3-5-q053",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q054-A",
    "questionId": "exam-sec-3-5-q054",
    "optionLabel": "A",
    "optionText": "Las cargas de servicio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q054-B",
    "questionId": "exam-sec-3-5-q054",
    "optionLabel": "B",
    "optionText": "Condiciones ambientales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q054-C",
    "questionId": "exam-sec-3-5-q054",
    "optionLabel": "C",
    "optionText": "No restringir el movimiento del panel",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q054-D",
    "questionId": "exam-sec-3-5-q054",
    "optionLabel": "D",
    "optionText": "Cargas estructurales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q055-A",
    "questionId": "exam-sec-3-5-q055",
    "optionLabel": "A",
    "optionText": "Descascarillamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q055-B",
    "questionId": "exam-sec-3-5-q055",
    "optionLabel": "B",
    "optionText": "Asentamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q055-C",
    "questionId": "exam-sec-3-5-q055",
    "optionLabel": "C",
    "optionText": "Falla por humedad interior",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q055-D",
    "questionId": "exam-sec-3-5-q055",
    "optionLabel": "D",
    "optionText": "Fallas en juntas calafateadas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q056-A",
    "questionId": "exam-sec-3-5-q056",
    "optionLabel": "A",
    "optionText": "Juntas de construcci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q056-B",
    "questionId": "exam-sec-3-5-q056",
    "optionLabel": "B",
    "optionText": "Franjas de cierre",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q056-C",
    "questionId": "exam-sec-3-5-q056",
    "optionLabel": "C",
    "optionText": "Juntas de aislamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q056-D",
    "questionId": "exam-sec-3-5-q056",
    "optionLabel": "D",
    "optionText": "Juntas de tablero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q057-A",
    "questionId": "exam-sec-3-5-q057",
    "optionLabel": "A",
    "optionText": "El relleno mal colocado puede provocar que la losa se desnivele",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q057-B",
    "questionId": "exam-sec-3-5-q057",
    "optionLabel": "B",
    "optionText": "El relleno mal colocado puede provocar que la losa se deslice de su posici\u00f3n original",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q057-C",
    "questionId": "exam-sec-3-5-q057",
    "optionLabel": "C",
    "optionText": "El relleno mal colocado puede provocar que la losa se friccione con las franjas de cierre",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q057-D",
    "questionId": "exam-sec-3-5-q057",
    "optionLabel": "D",
    "optionText": "El relleno mal colocado puede provocar que la losa se agriete",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q058-A",
    "questionId": "exam-sec-3-5-q058",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q058-B",
    "questionId": "exam-sec-3-5-q058",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q059-A",
    "questionId": "exam-sec-3-5-q059",
    "optionLabel": "A",
    "optionText": "Aplicar materiales de recubrimiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q059-B",
    "questionId": "exam-sec-3-5-q059",
    "optionLabel": "B",
    "optionText": "Pulir la superficie",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q059-C",
    "questionId": "exam-sec-3-5-q059",
    "optionLabel": "C",
    "optionText": "Aplicar liquido de curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q059-D",
    "questionId": "exam-sec-3-5-q059",
    "optionLabel": "D",
    "optionText": "Limpiar el desmoldante",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q060-A",
    "questionId": "exam-sec-3-5-q060",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q060-B",
    "questionId": "exam-sec-3-5-q060",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q061-A",
    "questionId": "exam-sec-3-5-q061",
    "optionLabel": "A",
    "optionText": "Concreto",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q061-B",
    "questionId": "exam-sec-3-5-q061",
    "optionLabel": "B",
    "optionText": "Lechada",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q061-C",
    "questionId": "exam-sec-3-5-q061",
    "optionLabel": "C",
    "optionText": "Yeso",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q061-D",
    "questionId": "exam-sec-3-5-q061",
    "optionLabel": "D",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q062-A",
    "questionId": "exam-sec-3-5-q062",
    "optionLabel": "A",
    "optionText": "Desbastando las aletas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q062-B",
    "questionId": "exam-sec-3-5-q062",
    "optionLabel": "B",
    "optionText": "Rellenando los orificios con mezcla de mortero",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q062-C",
    "questionId": "exam-sec-3-5-q062",
    "optionLabel": "C",
    "optionText": "Se lava con agua en \u00e1rea a resanar",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q062-D",
    "questionId": "exam-sec-3-5-q062",
    "optionLabel": "D",
    "optionText": "Se raspa el \u00e1rea para dejarla a ras",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q063-A",
    "questionId": "exam-sec-3-5-q063",
    "optionLabel": "A",
    "optionText": "Para asegurar una superficie plana",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q063-B",
    "questionId": "exam-sec-3-5-q063",
    "optionLabel": "B",
    "optionText": "Para garantizar la est\u00e9tica del acabado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q063-C",
    "questionId": "exam-sec-3-5-q063",
    "optionLabel": "C",
    "optionText": "Para sellar herm\u00e9ticamente contra el aire y agua",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q063-D",
    "questionId": "exam-sec-3-5-q063",
    "optionLabel": "D",
    "optionText": "Para homogeneizar las cargas de la estructura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q064-A",
    "questionId": "exam-sec-3-5-q064",
    "optionLabel": "A",
    "optionText": "Limpieza y sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q064-B",
    "questionId": "exam-sec-3-5-q064",
    "optionLabel": "B",
    "optionText": "Sellado y selecci\u00f3n de material",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q064-C",
    "questionId": "exam-sec-3-5-q064",
    "optionLabel": "C",
    "optionText": "Limpieza y colocaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q064-D",
    "questionId": "exam-sec-3-5-q064",
    "optionLabel": "D",
    "optionText": "Selecci\u00f3n de material y limpieza",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q065-A",
    "questionId": "exam-sec-3-5-q065",
    "optionLabel": "A",
    "optionText": "El material de sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q065-B",
    "questionId": "exam-sec-3-5-q065",
    "optionLabel": "B",
    "optionText": "El ancho de la junta",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q065-C",
    "questionId": "exam-sec-3-5-q065",
    "optionLabel": "C",
    "optionText": "Si cuenta con refuerzo o no",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q065-D",
    "questionId": "exam-sec-3-5-q065",
    "optionLabel": "D",
    "optionText": "La cantidad de componentes",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q066-A",
    "questionId": "exam-sec-3-5-q066",
    "optionLabel": "A",
    "optionText": "Para que se logre un espesor adecuado de sellado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q066-B",
    "questionId": "exam-sec-3-5-q066",
    "optionLabel": "B",
    "optionText": "Para proteger el refuerzo en caso de haberlo",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q066-C",
    "questionId": "exam-sec-3-5-q066",
    "optionLabel": "C",
    "optionText": "Para lograr una junta limpia",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q066-D",
    "questionId": "exam-sec-3-5-q066",
    "optionLabel": "D",
    "optionText": "Para permitir una junta flexible",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q067-A",
    "questionId": "exam-sec-3-5-q067",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q067-B",
    "questionId": "exam-sec-3-5-q067",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q068-A",
    "questionId": "exam-sec-3-5-q068",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q068-B",
    "questionId": "exam-sec-3-5-q068",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q069-A",
    "questionId": "exam-sec-3-5-q069",
    "optionLabel": "A",
    "optionText": "20 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q069-B",
    "questionId": "exam-sec-3-5-q069",
    "optionLabel": "B",
    "optionText": "10 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q069-C",
    "questionId": "exam-sec-3-5-q069",
    "optionLabel": "C",
    "optionText": "5 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q069-D",
    "questionId": "exam-sec-3-5-q069",
    "optionLabel": "D",
    "optionText": "15 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q070-A",
    "questionId": "exam-sec-3-5-q070",
    "optionLabel": "A",
    "optionText": "De 5 a 8",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q070-B",
    "questionId": "exam-sec-3-5-q070",
    "optionLabel": "B",
    "optionText": "De 6 a 9",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q070-C",
    "questionId": "exam-sec-3-5-q070",
    "optionLabel": "C",
    "optionText": "De 7 a 10",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q070-D",
    "questionId": "exam-sec-3-5-q070",
    "optionLabel": "D",
    "optionText": "De 8 a 11",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q071-A",
    "questionId": "exam-sec-3-5-q071",
    "optionLabel": "A",
    "optionText": "Fibra de vidrio",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q071-B",
    "questionId": "exam-sec-3-5-q071",
    "optionLabel": "B",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q071-C",
    "questionId": "exam-sec-3-5-q071",
    "optionLabel": "C",
    "optionText": "Acr\u00edlico",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q071-D",
    "questionId": "exam-sec-3-5-q071",
    "optionLabel": "D",
    "optionText": "Epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q072-A",
    "questionId": "exam-sec-3-5-q072",
    "optionLabel": "A",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q072-B",
    "questionId": "exam-sec-3-5-q072",
    "optionLabel": "B",
    "optionText": "Fibra de vidrio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q072-C",
    "questionId": "exam-sec-3-5-q072",
    "optionLabel": "C",
    "optionText": "Resina",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q072-D",
    "questionId": "exam-sec-3-5-q072",
    "optionLabel": "D",
    "optionText": "Poliestireno",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q073-A",
    "questionId": "exam-sec-3-5-q073",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q073-B",
    "questionId": "exam-sec-3-5-q073",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q074-A",
    "questionId": "exam-sec-3-5-q074",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q074-B",
    "questionId": "exam-sec-3-5-q074",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q075-A",
    "questionId": "exam-sec-3-5-q075",
    "optionLabel": "A",
    "optionText": "Por congelaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q075-B",
    "questionId": "exam-sec-3-5-q075",
    "optionLabel": "B",
    "optionText": "Por delaminaci\u00f3n",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q075-C",
    "questionId": "exam-sec-3-5-q075",
    "optionLabel": "C",
    "optionText": "Aleatorio",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q075-D",
    "questionId": "exam-sec-3-5-q075",
    "optionLabel": "D",
    "optionText": "Pl\u00e1stico",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q076-A",
    "questionId": "exam-sec-3-5-q076",
    "optionLabel": "A",
    "optionText": "0.75 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q076-B",
    "questionId": "exam-sec-3-5-q076",
    "optionLabel": "B",
    "optionText": "1 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q076-C",
    "questionId": "exam-sec-3-5-q076",
    "optionLabel": "C",
    "optionText": "0.50 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q076-D",
    "questionId": "exam-sec-3-5-q076",
    "optionLabel": "D",
    "optionText": "0.25 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q077-A",
    "questionId": "exam-sec-3-5-q077",
    "optionLabel": "A",
    "optionText": "0.50 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q077-B",
    "questionId": "exam-sec-3-5-q077",
    "optionLabel": "B",
    "optionText": "0.75 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q077-C",
    "questionId": "exam-sec-3-5-q077",
    "optionLabel": "C",
    "optionText": "1 mm",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q077-D",
    "questionId": "exam-sec-3-5-q077",
    "optionLabel": "D",
    "optionText": "1.5 mm",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q078-A",
    "questionId": "exam-sec-3-5-q078",
    "optionLabel": "A",
    "optionText": "Una buena compactaci\u00f3n de la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q078-B",
    "questionId": "exam-sec-3-5-q078",
    "optionLabel": "B",
    "optionText": "Bajo revenimiento e hidrataci\u00f3n adecuada",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q078-C",
    "questionId": "exam-sec-3-5-q078",
    "optionLabel": "C",
    "optionText": "Velocidades del viento menores a 8 km/h",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q078-D",
    "questionId": "exam-sec-3-5-q078",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q079-A",
    "questionId": "exam-sec-3-5-q079",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q079-B",
    "questionId": "exam-sec-3-5-q079",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q080-A",
    "questionId": "exam-sec-3-5-q080",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q080-B",
    "questionId": "exam-sec-3-5-q080",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q081-A",
    "questionId": "exam-sec-3-5-q081",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q081-B",
    "questionId": "exam-sec-3-5-q081",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q082-A",
    "questionId": "exam-sec-3-5-q082",
    "optionLabel": "A",
    "optionText": "Descascarillado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q082-B",
    "questionId": "exam-sec-3-5-q082",
    "optionLabel": "B",
    "optionText": "Sellado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q082-C",
    "questionId": "exam-sec-3-5-q082",
    "optionLabel": "C",
    "optionText": "Asentamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q082-D",
    "questionId": "exam-sec-3-5-q082",
    "optionLabel": "D",
    "optionText": "Escamado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q083-A",
    "questionId": "exam-sec-3-5-q083",
    "optionLabel": "A",
    "optionText": "Descascarillado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q083-B",
    "questionId": "exam-sec-3-5-q083",
    "optionLabel": "B",
    "optionText": "Asentamiento",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q083-C",
    "questionId": "exam-sec-3-5-q083",
    "optionLabel": "C",
    "optionText": "Socavado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q083-D",
    "questionId": "exam-sec-3-5-q083",
    "optionLabel": "D",
    "optionText": "Escamado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q084-A",
    "questionId": "exam-sec-3-5-q084",
    "optionLabel": "A",
    "optionText": "Con parches de lechada",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q084-B",
    "questionId": "exam-sec-3-5-q084",
    "optionLabel": "B",
    "optionText": "Con una inyecci\u00f3n de epoxi",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q084-C",
    "questionId": "exam-sec-3-5-q084",
    "optionLabel": "C",
    "optionText": "Con lonas de fibra de carbono",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q084-D",
    "questionId": "exam-sec-3-5-q084",
    "optionLabel": "D",
    "optionText": "Todas las anteriores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q085-A",
    "questionId": "exam-sec-3-5-q085",
    "optionLabel": "A",
    "optionText": "En cada esquina de la abertura",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q085-B",
    "questionId": "exam-sec-3-5-q085",
    "optionLabel": "B",
    "optionText": "En la parte superior de la abertura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q085-C",
    "questionId": "exam-sec-3-5-q085",
    "optionLabel": "C",
    "optionText": "En el per\u00edmetro de la abertura",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q085-D",
    "questionId": "exam-sec-3-5-q085",
    "optionLabel": "D",
    "optionText": "En la parte inferior de la abertura",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q086-A",
    "questionId": "exam-sec-3-5-q086",
    "optionLabel": "A",
    "optionText": "Grietas diagonales en las aberturas de un panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q086-B",
    "questionId": "exam-sec-3-5-q086",
    "optionLabel": "B",
    "optionText": "Grietas transversales en las esquinas inferiores",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q086-C",
    "questionId": "exam-sec-3-5-q086",
    "optionLabel": "C",
    "optionText": "Grietas diagonales en las esquinas inferiores",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q086-D",
    "questionId": "exam-sec-3-5-q086",
    "optionLabel": "D",
    "optionText": "Grietas longitudinales a las aberturas de un panel",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q087-A",
    "questionId": "exam-sec-3-5-q087",
    "optionLabel": "A",
    "optionText": "Agrietamiento diagonal",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q087-B",
    "questionId": "exam-sec-3-5-q087",
    "optionLabel": "B",
    "optionText": "Agrietamiento cuadrado",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q087-C",
    "questionId": "exam-sec-3-5-q087",
    "optionLabel": "C",
    "optionText": "Agrietamiento horizontal",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q087-D",
    "questionId": "exam-sec-3-5-q087",
    "optionLabel": "D",
    "optionText": "Agrietamiento vertical",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q088-A",
    "questionId": "exam-sec-3-5-q088",
    "optionLabel": "A",
    "optionText": "Grietas horizontales cerca de una altura media.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q088-B",
    "questionId": "exam-sec-3-5-q088",
    "optionLabel": "B",
    "optionText": "Grietas verticales cerca de una altura media.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q088-C",
    "questionId": "exam-sec-3-5-q088",
    "optionLabel": "C",
    "optionText": "Grietas cuadradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q088-D",
    "questionId": "exam-sec-3-5-q088",
    "optionLabel": "D",
    "optionText": "Grietas Diagonales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q089-A",
    "questionId": "exam-sec-3-5-q089",
    "optionLabel": "A",
    "optionText": "Grietas verticales cerca de una altura media.",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q089-B",
    "questionId": "exam-sec-3-5-q089",
    "optionLabel": "B",
    "optionText": "Grietas Diagonales",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q089-C",
    "questionId": "exam-sec-3-5-q089",
    "optionLabel": "C",
    "optionText": "Grietas cuadradas",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q089-D",
    "questionId": "exam-sec-3-5-q089",
    "optionLabel": "D",
    "optionText": "Grietas horizontales cerca de una altura media.",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q090-A",
    "questionId": "exam-sec-3-5-q090",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q090-B",
    "questionId": "exam-sec-3-5-q090",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q091-A",
    "questionId": "exam-sec-3-5-q091",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q091-B",
    "questionId": "exam-sec-3-5-q091",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q092-A",
    "questionId": "exam-sec-3-5-q092",
    "optionLabel": "A",
    "optionText": "VERDADERO",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q092-B",
    "questionId": "exam-sec-3-5-q092",
    "optionLabel": "B",
    "optionText": "False",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q093-A",
    "questionId": "exam-sec-3-5-q093",
    "optionLabel": "A",
    "optionText": "Mojar el refuerzo antes de colocarse",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q093-B",
    "questionId": "exam-sec-3-5-q093",
    "optionLabel": "B",
    "optionText": "Quitar el agua de exudado antes del curado",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q093-C",
    "questionId": "exam-sec-3-5-q093",
    "optionLabel": "C",
    "optionText": "Agregar aditivo retardante a la mezcla",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q093-D",
    "questionId": "exam-sec-3-5-q093",
    "optionLabel": "D",
    "optionText": "Aplicar una niebla a la losa de piso",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q094-A",
    "questionId": "exam-sec-3-5-q094",
    "optionLabel": "A",
    "optionText": "Base debajo de la sub rasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q094-B",
    "questionId": "exam-sec-3-5-q094",
    "optionLabel": "B",
    "optionText": "Compactaci\u00f3n adecuada de la subrasante",
    "isCorrect": false
  },
  {
    "id": "exam-sec-3-5-q094-C",
    "questionId": "exam-sec-3-5-q094",
    "optionLabel": "C",
    "optionText": "Zapatas continuas",
    "isCorrect": true
  },
  {
    "id": "exam-sec-3-5-q094-D",
    "questionId": "exam-sec-3-5-q094",
    "optionLabel": "D",
    "optionText": "Muro de conexi\u00f3n entre la zapata y el panel",
    "isCorrect": false
  }
];
