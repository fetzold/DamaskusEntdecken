const intro = {
	"name": "intro",
    "dropdownText":
    [
        {
            "droptext": "Willkommen auf deiner Reise von Europa nach Asien. Dein Weg fühhrt uns auf der Seidenstraße  über Venedig und Konstantinopel zu Damaskus. <p/> Dort erwarted dich schon Raschid Haddad einer der bekanntesten Händler dieser Gegend. Er möchte dich in seinem Haus empfangen, dabei wirst du Geschenke aus Europa überreichen, doch zuvor benötigst du neue Waren, für die Reise nach Asien, die auf dem berühmten Markt Suq Al-Hamidia zu finden sind.<p/> In Damaskus wird eine andere Währung verwendet als du sie besitzt, somit machst du dich erstmal auf dem Weg Goldmünzen zu suchen. Nach einem Stopp in der Karawanserei, besuch doch zunächst mal das Hamam und erfrische dich an einem kühlen Getränk auf dem Weg dorthin.<p/> Wenn du genug Goldmünzen gefunden hast kannst du dir neue Waren auf dem Markt besorgen. Sobald du diese hast mach dich auf dem Weg durch Straßen und enge Gassen um Raschid Haddad in seinem Empfangszimmer zu treffen. ",
            
            "iconPositionX": "49%",
            "iconPositionY": "0%"
        }
    ],
	"infoTexts":
	[
		{
			"text": " Willkomen in Damaskus der Hauptstadt Syriens und dem kulturellen und religiöse Zentrum des Orientes! Wir wünschen dir einen angenehmen Aufenthalt!",
			"iconPositionX": "44.7%",
			"iconPositionY": "41.7%"
		},
		{
			"text": "Endlich erreichst du Konstantinopel, das heutige Istanbul, doch dein Aufenthalt dauert nur wenige Tage, auf auf nach Damaskus...",
			"iconPositionX": "34.4%",
			"iconPositionY": "24.1%"
		},
		{
			"text": "Von einer Gondelfahrt und einigen Ruhetagen in Venedig geht die Reise weiter...",
			"iconPositionX": "19.8%",
			"iconPositionY": "14.8%"
		}
	]
};

const map = {
	"name": "map",
	"backgroundPath": "pictures/damaskus_karte.png",
    "dropdownText":[
        {
            "droptext": "Willkommen auf deiner Reise von Europa nach Asien. Dein Weg führt uns auf der Seidenstraße  über Venedig und Konstantinopel zu Damaskus. <p/> Dort erwarted dich schon Raschid Haddad einer der bekanntesten Händler dieser Gegend. Er möchte dich in seinem Haus empfangen, dabei wirst du Geschenke aus Europa überreichen, doch zuvor benötigst du neue Waren für die Reise nach Asien, die auf dem berühmten Markt Suq Al-Hamidia zu finden sind.<p/> In Damaskus wird eine andere Währung verwendet als du sie besitzt, somit machst du dich erstmal auf dem Weg Goldmünzen zu suchen. Nach einem Stopp in der Karawanserei besuch doch zunächst mal das Hamam und erfrische dich an einem kühlen Getränk auf dem Weg dorthin.<p/> Wenn du genug Goldmünzen gefunden hast kannst du dir neue Waren auf dem Markt besorgen. Sobald du diese hast mach dich auf dem Weg durch Straßen und enge Gassen um Raschid Haddad in seinem Empfangszimmer zu treffen.",
            "iconPositionX": "49%",
            "iconPositionY": "0%"
        }
    ],
	"infoTexts":
	[
		{
			"text":"Karawanserei",
			"name" : "karawanserei",
			"iconPositionX":"40.1%",
			"iconPositionY": "46.3%"
		},
		{
			"text":"Moschee",
			"name" : "umayyadenMoschee",
			"iconPositionX":"38.0%",
			"iconPositionY": "25.0%"
		},
		{
			"text":"Suq",
			"name" : "suq",
			"iconPositionX":"29.7%",
			"iconPositionY": "26.9%"
		},
		{
			"text":"Hamam",
			"name" : "hamam",
			"iconPositionX":"31.3%",
			"iconPositionY": "35.2%"
		},
		{
			"text":"Kirche",
			"name" : "kirche",
			"iconPositionX":"73.9%",
			"iconPositionY": "27.8%"
		},
		{
			"text":"Haus",
			"name" : "zimmer",
			"iconPositionX":"45.8%",
			"iconPositionY": "69.4%"
		}
	]
};

const karawanserei = {
	"name": "karawanserei",
	"movieObjekt": "movies/Karawanserei.mp4",
	"backgroundPath": "pictures/Karawanserei/startscreen.png",
	"scenes":
	[
		{
			"id": 0,
			"blurredBackgroundPaths": 
			[
				 "pictures/Karawanserei/scene1Blurred1.png"
			],
			"backgroundPath": "pictures/Karawanserei/scene1Obj1.png",
			"sceneObjects":
			[
				{	
					"id" : "karawansereiObj1",
					"path" : "pictures/Karawanserei/scene1Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Der Kahn Assad Pascha ist die größte Karawanserei in Damaskus. Eine Karawanserei war eine ummauerte Herberge an Karawanenstraßen. Reisende konnten dort mit ihren Tieren und Handelswaren sicher nächtigen und sich mit Lebensmitteln versorgen. Große Karawansereien dienten zugleich als Warenlager und Handelsplatz für Im- und Exportwaren.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Hier im Kahn Assad Pascha bist du eingekehrt. Bewundere seine Architektur, während du dich ausruhst und mit anderen Reisenden plauderst.",
					"iconPositionX": "52.08%",
					"iconPositionY": "55.56%"
				}
			],
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		}
	]
};

const umayyadenMoschee = {
	"name": "umayyadenMoschee",
	"movieObjekt": "movies/Moschee.mp4",
	"backgroundPath": "pictures/Moschee/startscreen.png",
	"scenes":
	[
		{
			"id": 0,
			"blurredBackgroundPaths": 
			[
				 "pictures/Moschee/scene1Blurred1.png"
			],
			"backgroundPath": "pictures/Moschee/scene1Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "moscheeObj1",
					"path" : "pictures/Moschee/scene1Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Die Umayyaden-Moschee in Damaskus ist eine der größten und ältesten Moscheen der Welt und Vorbild für andere Moscheen im Baustil einer antiken Basilika. In vorislamischer Zeit wurde sie als eine Johannes dem Täufer geweihte, frühbyzantinische Kathedrale errichtet. Sie hat vier Tore und drei später errichtete Minarette in verschiedenen Baustilen. <br><br> Das Ostminarett trägt den Namen Jesusminarett. Viele Muslime glauben, an diesem Ort werde am Ende der Welt Jesus erscheinen, um mit dem Antichristen zu kämpfen.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Hier stehst du vor der Umayyaden-Moschee, eine der größten und ältesten Moscheen der Welt. Tritt ein!",
					"iconPositionX": "20.83%",
					"iconPositionY": "28.71%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}	
		},

		{
			"id": 1,
			"blurredBackgroundPaths": 
			[
				
				 "pictures/Moschee/scene2Blurred1.png",
				 "pictures/Moschee/scene2Blurred2.png"
				
			],
			"backgroundPath": "pictures/Moschee/scene2Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "moscheeObj2",
					"path" : "pictures/Moschee/scene2Freigestellt1.png",
					"blurred" : "pictures/Moschee/scene2Blurred1.png"
				},
				{
					"id" : "moscheeObj3",
					"path" : "pictures/Moschee/scene2Freigestellt2.png",
					"blurred" : "pictures/Moschee/scene2Blurred2.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Die Moschee umschließt einen großen Innenhof mit drei kleinen Nebengebäuden, dem Schatzhaus, dem Uhrenhaus und einem Brunnenhaus. <br><br> Im Schatzhaus wurde arabischen Quellen zufolge der Staatsschatz aufbewahrt – al-Walid hielt dafür keinen Platz für geeigneter. Möglicherweise wurden im Schatzhaus jedoch nur die Spenden der islamischen Gemeinde aufbewahrt.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Hier siehst du das Brunnenhaus und das Schatzhaus mit seinen Mosaiken auf der Westseite des Innenhofes.",
					"iconPositionX": "32.30%",
					"iconPositionY": "55.56%"
				},
				{
					"text": "Hier stehst du vor dem Uhrenhaus.",
					"iconPositionX": "41.67%",
					"iconPositionY": "27.78%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}			
		},

		{
			"id": 2,
			"blurredBackgroundPaths": 
			[
				"pictures/Moschee/scene3Blurred1.png"
			],
			"backgroundPath": "pictures/Moschee/scene3Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "moscheeObj4",
					"path" : "pictures/Moschee/scene3Freigestellt1.png"
				}	
			],
            "dropdownText":[
                {
                    "droptext": "Die Moschee ist mit farbigen Mosaiken verziert, die von byzantinischen Baumeistern gefertigt wurden. Besonders prächtig sind die Mosaiken in den Arkadengängen, die das Paradies darstellen – mit goldenem Himmel und 22 verschiedenen Grüntönen für das Laub der Bäume. Die Oase von Damaskus repräsentierte dabei das äußere, weltliche Paradies. <br><br> Der Vorhof der Umayyadenmoschee hingegen sollte den Vorhof zum Paradies darstellen. So inszenierten sich die Umayyadenkalifen als religiöse Oberhäupter - und verwiesen zeitgleich auf den politischen Anspruch, als Sachverwalter Gottes über die Gläubigen zu herrschen. Neben der großen Gebetshalle sind noch vier größere Hallen vorhanden. In einer davon befindet sich ein Schrein, der den Kopf al-Husains, des Enkels Mohammeds, enthalten soll. Der Schrein ist ein wichtiges Pilgerziel für Schiiten.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Hier in der weitläufigen Gebetshalle siehst du den Schrein Johannes des Täufers, welcher von Christen und Muslimen gleichermaßen verehrt wird und welcher das Haupt Johannes des Täufers bergen soll.",
					"iconPositionX": "50.00%",
					"iconPositionY": "41.67%"
				}
			],
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}
		}
	]
};

const suq = {
	"name": "suq",
	"movieObjekt": "movies/Suq.mp4",	
	"backgroundPath": "pictures/Suq/startscreen.png",
	"scenes":
	[
		{
			"id": 0,
			"blurredBackgroundPaths": 
			[
				"pictures/Suq/scene1Blurred1.png",
				"pictures/Suq/scene1Blurred2.png",
				"pictures/Suq/scene1Blurred3.png"
			],
			"backgroundPath": "pictures/Suq/scene1Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "suqObj1",
					"path" : "pictures/Suq/scene1Freigestellt1.png"
				},
				{
					"id" : "suqObj2",
					"path" : "pictures/Suq/scene1Freigestellt2.png"
				},
				{
					"id" : "suqObj3",
					"path" : "pictures/Suq/scene1Freigestellt3.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Der Suq al-Hamidiya ist der bekannteste Basar von Damaskus und liegt inmitten der Altstadt. Die größte und längste Markthalle des Basars wurde über einer alten Römerstraße errichtet, die einst zum Jupitertempel im Herzen der alten römischen Siedlung führte. Heute verbindet diese 500 m lange überdachte Markthalle die Schari' ath-Thawra (der „Revolutionsstraße“) mit der über dem alten Jupitertempel errichteten Umayyaden-Moschee. An dieser Hauptverkehrsader des Suqs findet man vor allem Läden für orientalische Accessoires und Kleidung sowie Cafés und Eisdielen. Die bekannteste Eisdiele ist Bakdash, deren Spezialität arabisches Milcheis mit Pistazien ist. Dafür ist die Eisdiele in ganz Syrien bekannt. Eine weitere berühmte Marktstraße der Altstadt von Damaskus ist der Suq al-Bzouriyye. Hier werden heute Süßigkeiten und Gewürze verkauft. Wichtige Gebäude im zentralen Basar von Damaskus sind der Azim-Palast und der Chan Asad Pascha.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Willkommen auf dem Suq al-Hamidiya. Hier hast du die Möglichkeit, damaszener Waren zu erwerben, wie Obst, Textilien und Gewürze. Schau dich etwas um, vielleicht findest du Waren, die sich für deine Weiterreise eignen!",
					"iconPositionX": "17.19%",
					"iconPositionY": "65.74%"
				},
				{
					"text": "Die zahllosen Pasteten- und Zuckerbäcker, die wir schon aus Tausend und einer Nacht kennen, haben ihre leckeren Kuchen und namenreichen Zuckerwaren, ihre gewürzigen, süßen und pikanten Tränkchen, ihre farbenreichen Gelées und Fruchtsäfte in Dutzenden von Tässchen und Schüsselchen auf dem langen Ladentisch ausfgestellt. Du bräuchtest nur deine Hand ausstrecken, um deinen Appetit zu befriedigen.",
					"iconPositionX": "40.67%",
					"iconPositionY": "78.19%"
				},
				{
					"text": "Alle Arbeit in Damaskus ist öffentlich. Das Haus gehört ausschließlich der Familie und der Erholung; das Geschäft, wie es immer heissen mag, gehört auf den Markt",
					"iconPositionX": "78.13%",
					"iconPositionY": "81.48%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}	
		},

		{
			"id": 1,
			"blurredBackgroundPaths": 
			[
				"pictures/Suq/scene2Blurred1.png"
			],
			"backgroundPath": "pictures/Suq/scene2Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "suqObj4",
					"path" : "pictures/Suq/scene2Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": " Gewürze waren bis in die Neuzeit wichtige Handelswaren aus Südostasien. Sie wurden nicht nur als Würzmittel und Aromastoffe, sondern auch als Medikamente, Anästhetika, Aphrodisiaka, Parfüm und für „Zaubertränke“ verwendet. Gewürze sind ein wichtiger Teil der orientalischen Küche. Egal, ob süß oder salzig, jede Mahlzeit wird mit Gewürzen verfeinert. Dabei gibt es nicht nur einzelne Gewürze wie Kardamom, Chili und Zimt, sondern auch Gewürzmischungen für Reis, Suppe, Hühnchen oder Falafel. Sogar Kaffee wird häufig mit Kardamom gewürzt. ",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Ob Paprika, Kumin oder gleich ganze Gewürzmischungen für Falafel oder Reis, hier findest du alles, was dein Herz begehrt.",
					"iconPositionX": "52.08%",
					"iconPositionY": "46.39%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}	
		},

		{
			"id": 2,
			"blurredBackgroundPaths": 
			[
				"pictures/Suq/scene3Blurred1.png"
			],
			"backgroundPath": "pictures/Suq/scene3Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "suqObj5",
					"path" : "pictures/Suq/scene3Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Seide als Handelsware aus Asien gab der Seidenstraße ihren Namen. Neben ihr wurden auch andere Waren wie Gold, Edelsteine und vor allem Glas, aber auch Pelze, Keramik, Porzellan, Jad, Bronze, Lacke und Eisen gehandelt. ",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Neben Gewürzen findest du auf dem Suq auch eine große Auswahl an Textilien. Gefällt dir etwas?",
					"iconPositionX": "26.04%",
					"iconPositionY": "37.04%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}	
		},

		{
			"id": 3,
			"blurredBackgroundPaths": 
			[
				"pictures/Suq/scene4Blurred1.png"
			],
			"backgroundPath": "pictures/Suq/scene4Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "suqObj6",
					"path" : "pictures/Suq/scene4Freigestellt1.png" 
				}
			],
            "dropdownText":[
                {
                    "droptext": "Alles was die Erde Schönes und Wünschenswertes besitzen mag, denkt man vereinigt mit dem Worte el Guta, dem meilenweiten Park um Damaskus mit seinen Rosendörfern, Wallnussalleen, Aprikosenwäldern, Pfirsichpflanzungen, Granatenbüschen und Olivenhainen. Die Guta ist übersäht mit einzelnen Höfen, großen und kleinen, deren Getreideernten unter dem Schatten ihrer Bäume reifen.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Die Lieblingstraube des Damaszeners ist die zeni. Die Traube ist groß und schwer, und ihre grünweißen Beeren sind lang, oft bis zu zwei Zoll, und von der Dicke eines mittelstarken Fingers, daher trägt sie auch den Beinamen Mädchenfinger.",
					"iconPositionX": "37.00%",
					"iconPositionY": "68.52%"
				}
			],
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}
		}
	]
};

const hamam = {
	"name": "hamam",
	"movieObjekt": "movies/Wasserverkauf.mp4",
	"backgroundPath": "pictures/Hamam/startscreen.png",
	"scenes":
	[
		{
			"id": 0,
			"blurredBackgroundPaths": 
			[
				"pictures/Hamam/scene1Blurred1.png"
			],
			"backgroundPath": "pictures/Hamam/scene1Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "hamamObj1",
					"path" : "pictures/Hamam/scene1Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Durch eine kleine Tür gelangt man in das Innere des Hamams. Dies ist eine öffentliche Badeanstalt bzw ein Dampfbad.<p/> Es ist ein wichtiger Bestandteil der islamischen Bade- und Köperkultur.<p/> Öffentliche Hamams werden nach Geschlechtern getrennt genutzt: Es sind entweder separate Räumlichkeiten vorhanden oder die Nutzungszeiten für Frauen und Männer sind verschieden.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Du möchtest ein Bad nehmen? Dann komm herrein in unser Hammam. Lass dich von der entspannten Atmosphäre mitnehmen welche hier herrscht.",
					"iconPositionX": "30.7%",
					"iconPositionY": "33.3%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		},

		{
			"id": 1,
			"blurredBackgroundPaths": 
			[
				"pictures/Hamam/scene2Blurred1.png"
			],
			"backgroundPath": "pictures/Hamam/scene2Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "hamamObj2",
					"path" : "pictures/Hamam/scene2Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Nach dem passieren des Eingangs gelangt man in eine Runde Halle welche mit einer großen Kuppel gekrönt ist. In der Mitte befindet sich meist ein übersprudelnder Brunnen, welcher erfrischende kühle Luft produziert. An den Seiten der Halle sind Nischen mit kleinen Betten und Teppichen. Dort zieht man sich um und legt ein spezielles Handtuch (Peştemal) als Lendenschurz an.<p/> Entweder man wäscht sich selber mit dem Wasser aus kleinen Nischen oder lässt sich von dem Tallak waschen. Dazu wird ein Baumwollsack eingeseift, durch Schwenken mit Luft gefüllt, manuell verschlossen und Schaum aus dem Gewebe auf den Körper gestreift.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Sieh dir die wunderschönen Ornamente an, welche die Halle schmücken und lass dich von der Atmosphäre in das Bad begleiten. Der Tellak (Bademeister, Masseur) seift dich gern mit einem Baumwollsack ein!",
					"iconPositionX": "36.5%",
					"iconPositionY": "46.3%"
				}
			],
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		}
	]
};

const kirche = {
	"name": "kirche",
	"movieObjekt": "movies/Teppich.mp4",
	"backgroundPath": "pictures/Kirche/startscreen.png",
	"scenes":
	[
		{
			"id": 0,
			"blurredBackgroundPaths": 
			[
				"pictures/Kirche/scene1Blurred1.png"
			],
			"backgroundPath": "pictures/Kirche/scene1Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "kircheObj1",
					"path" : "pictures/Kirche/scene1Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Die Ananias-Kapelle ist eine Andachtsstätte, die nach Ananias, einer biblischen Gestalt, benannt ist.<p/> Er gehörte mit seiner Frau Sapphira wohl der urchristlichen Gemeinde an und soll in einer Vision von Gott aufgefordert worden sein, einen gewissen Juden namens Saulus von Tarsos, der als grausamer Christenverfolger bekannt ist, vor der Stadt aufzusuchen, ihm die Hände aufzulegen und ihn so von seiner Blindheit zu heilen. Ananias tut, wie ihm geheißen wurde, das Wunder geschieht und Saulus bekehrt sich in Damaskus zum Christentum, was zum sprichwörtlichen Damaskuserlebnis wird. Saulus nennt sich fortan Paulus.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Die Kapelle bietet einen Ort der Ruhe, hier findest du religiöse Statuen in Nischen",
					"iconPositionX": "5.2%",
					"iconPositionY": "55.5%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		},

		{
			"id": 1,
			"blurredBackgroundPaths": 
			[
				"pictures/Kirche/scene2Blurred1.png"
			],
			"backgroundPath": "pictures/Kirche/scene2Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "kircheObj2",
					"path" : "pictures/Kirche/scene2Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Die Kapelle soll der Familie Ananias gehört haben und ist unterirdisch angeordnet. Das wird vor allem darauf zurückgeführt, dass die ersten Gemeinden sich unter römischer Herrschaft geheim treffen mussten.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Hier unter der Erde entdeckst du den Altar der Kirche, schau das Bild darüber zeigt die Taufe des Heiligen Paulus von St. Ananias, genieße die kühle Luft und entspann dich kurz.",
					"iconPositionX": "47.9%",
					"iconPositionY": "55.5%"
				}
			],
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		}
	]
};

const zimmer = {
	"name": "zimmer",
	"movieObjekt": "movies/Haus_Zimmer.mp4",
	"backgroundPath": "pictures/Zimmer/startscreen.png",
	"scenes":
	[
		{
			"id": 0,
			"blurredBackgroundPaths": 
			[
				"pictures/Zimmer/scene1Blurred1.png"
			],
			"backgroundPath": "pictures/Zimmer/scene1Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "zimmerObj1",
					"path" : "pictures/Zimmer/scene1Freigestellt1.png"
				}
			],
            "dropdownText":[
                {
                    "droptext": "Der Gang durch schmale und ruhige Gassen führen einen zu dem Haus mit dem Empfangszimmer. Die Außenfassaden sind ganz schmucklos, es wird also nicht geprotzt. Erst wenn man einen Schritt weiter in das Innere wagt entdeckt man den waren Prunk des Hauses. Meist ist über der Eingangstür ein kleines Fenster von dem aus geschaut wird, welcher Besucher vor der Tür steht.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Willkommen bei Raschid Haddad, schau, auf der Tür zu seinem zu Hause sind Obstschalen abgebildet, sie stehen für Gastfreundlichkeit. Tritt herein..",
					"iconPositionX": "31.25%",
					"iconPositionY": "44.44%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		},

		{
			"id": 1,
			"blurredBackgroundPaths": 
			[
				"pictures/Zimmer/scene2Blurred1.png"
			],
			"backgroundPath": "pictures/Zimmer/scene2Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "zimmerObj2",
					"path" : "pictures/Zimmer/scene2Freigestellt1.png"
				}
			],
           "dropdownText":[
                {
                    "droptext": "Viele Häuser in Damaskus besitzen einen Innenhof in dem ein Brunnen für kühle Luft sorgt, erst von hier aus gelangt man zu dem Empfangszimmer. Doch vor dem betreten des Zimmers müssen die Schuhe ausgezogen werden.",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Ein Brunnen in der Mitte des Hofes spendet dir an einem heißen Tag etwas kühle und frische Luft, atme tief ein.",
					"iconPositionX": "39.06%",
					"iconPositionY": "55.56%"
				}
			],
			"positionNextButton":
			{
				"positionX": "400px",
				"positionY": "400px"
			},
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}			
		},

		{
			"id": 2,
			"blurredBackgroundPaths": 
			[
				"pictures/Zimmer/scene3Blurred1.png",
				"pictures/Zimmer/scene3Blurred2.png",
				"pictures/Zimmer/scene3Blurred3.png",
				"pictures/Zimmer/scene3Blurred4.png"
			],
			"backgroundPath": "pictures/Zimmer/scene3Obj1.png",
			"sceneObjects":
			[
				{
					"id" : "zimmerObj3",
					"path" : "pictures/Zimmer/scene3Freigestellt1.png"
				},
				{
					"id" : "zimmerObj4",
					"path" : "pictures/Zimmer/scene3Freigestellt2.png"
				},
				{
					"id" : "zimmerObj5",
					"path" : "pictures/Zimmer/scene3Freigestellt3.png"
				},
				{
					"id" : "zimmerObj6",
					"path" : "pictures/Zimmer/scene3Freigestellt4.png"
				}
			],
             "dropdownText":[
                {
                    "droptext": "Bei Tee und Obst werden bis zu 4h Stunden Verhandlungen in dem Empfangszimmer geführt. Damit dem Besucher nicht langweilig wird, bietet das Zimmer einiges an Schmuckstücken. Je mehr der Kaufmann verdiente desto prächtiger konnte er sein Empfangszimmer ausstatten.<p/> Die Räume und Häuser waren zwischen 8 und 10 Meter hoch, damit sich die kühle Luft sammeln kann. Da es früher kein Licht in den Räumen gab sobald es dunkel wurde, wurden Geschäfte nur bei Tageslicht abgehalten, je nach Tageszeit wurde das Licht in einem anderen Winkel in das Zimmer geworfen, sodass sich die Farben im Raum änderten und der Besucher immer wieder etwas neues in dem Raum entdeckte.<p/> Meist waren die Wände und Decken wie Textilien gemalt, da echte Textilien sehr kostbar und teuer waren. Zwei Jahre dauerte es im Schnitt einen Teppich zu knüpfen. Die Fenster im Zimmer zeigen zum Innenhof und sind meist aus Stein, bei dem Dresdner Damaskuszimmer sieht man ein Holzgitter welches für den Verkauf nach Europa eingebaut wurde.  ",
                    "iconPositionX": "49%",
					"iconPositionY": "0%"
                }
            ],
			"infoTexts":
			[
				{
					"text": "Statt Möbel siehst du hier Wandschränke und offene Nischen, hier mit Porzellan und kostbaren Geschirr.",
					"iconPositionX": "31.77%",
					"iconPositionY": "23.15%"
				},
				{
					"text": "In dieser Nische wird sonst Bettwäsche auf bewahrt, dies demonstriert wie wohlhabend die Familie ist.",
					"iconPositionX": "42.71%",
					"iconPositionY": "15.74%"
				},
				{
					"text": "Lass dir den Tee und kleines Gebäck von Raschid schmecken, du sollst dich bei ihm wohlfühlen.",
					"iconPositionX": "54.69%",
					"iconPositionY": "81.48%"
				},
				{
					"text": "Setz dich nieder und mach es dir bequem, du wirst eine Weile hier verbringen",
					"iconPositionX": "83.33%",
					"iconPositionY": "64.81%"
				}
			],
			"positionPreviousButton":
			{
				"positionX": "200px",
				"positionY": "400px"
			}		
		}
	]
};

const chapters = [intro, map, karawanserei, umayyadenMoschee, suq, hamam, kirche, zimmer];