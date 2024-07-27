const characterIntro = {
	lizhaojiaobo: "李昭（？—约公元260年），三国时期曹魏官吏，官拜冗从仆射，为魏帝曹髦的亲信。<br>焦伯，三国时期人物，魏帝曹髦护卫，官拜黄门从官。<br>曹髦见自己权力威势日渐削弱，感到不胜忿恨，于公元260年（甘露五年）五月初六夜里，令李昭和焦伯等在陵云台布署甲士，出讨司马昭，但最终失败，曹髦为成济所弑，李昭和焦伯等应该也战死。在《三国演义》里，焦伯挺枪出战成济，亦被成济所杀。",
	chengji: "成济（？～260年6月21日），三国时期曹魏官员。官至太子舍人。在魏帝曹髦起兵讨司马昭时，受到司马昭之心腹贾充指使，刺死曹髦。司马昭为平息众怒，将成倅、成济兄弟二人杀死。",
	yangfeng: "杨奉（？－197年/198年），东汉末年将领。杨奉早年参加白波军起义，曾经帮助李傕对抗郭汜，后来背叛李傕。兴平二年，加号兴义将军，护送汉献帝刘协东归雒阳，颇有功勋，加号车骑将军，屯兵于梁县。建安元年，随着汉献帝迁都许县，失去权力，先后依附于袁术、吕布，劫掠徐州和扬州地区。建安二年（一说三年），带兵进犯刘备领地，被刘备诱杀。",
	muludawang: "古典小说《三国演义》中的虚构人物，八纳洞主，孟获盟友。擅驱兽法，能行风雨，控制猛兽并指挥它们作战。在法术帮助下最初对蜀军取得一些胜利，但在诸葛亮的喷火木兽将他的动物吓跑后战败，最后死于乱军之中。",
	laimin: "来敏（165年—261年），字敬达，义阳新野人，东汉太中大夫来歙之后，司空来艳之子，三国时期蜀汉官员。东汉末年，逢董卓之乱，来敏跟随姐夫黄琬到荆州避难，黄琬是刘璋祖母的侄子，来敏又与姐姐来氏入蜀，被刘璋引为宾客。来敏喜欢读书，尤其喜欢《左氏春秋》。刘备平定益州后，以来敏为典学校尉，后立太子，来敏为家令。刘禅继位后，任命来敏为虎贲中郎将，诸葛亮驻汉中，请来敏为军祭酒、辅军将军。却因其口出狂言而被罢官，诸葛亮死后，来敏历任大长秋、光禄大夫、执慎将军等职，期间多次因说错话而被免官，蜀汉景耀年间，来敏去世，时年九十七岁。",
	shichangshi: "十常侍，指中国东汉（公元25年—220年）灵帝时期（168年-189年）操纵政权的十二个宦官：张让、赵忠、夏恽、郭胜、孙璋、毕岚、栗嵩、段珪、高望、张恭、韩悝、宋典（在小说《三国演义》里，十常侍指的是指张让、赵忠、封谞、段珪、曹节、侯览、蹇硕、程旷、夏恽、郭胜十人），他们都任职中常侍。玩弄小皇帝于股掌之中，以至灵帝称“张常侍是我父，赵常侍是我母”。十常侍自己横征暴敛，卖官鬻爵，他们的父兄子弟遍布天下，横行乡里，祸害百姓，无官敢管。人民不堪剥削、压迫，纷纷起来反抗。当时一些比较清醒的官吏，已看出宦官集团的黑暗腐败，导致大规模农民起义的形势。郎中张钧在给皇帝的奏章中明确指出，黄巾起义是外戚宦官专权逼出来的，他说：“张角所以能兴兵作乱，万人所以乐附之者，其源皆由十常侍多放父兄、子弟、婚宗、宾客典据州郡，辜确财利，侵略百姓，百姓之怨无所告诉，故谋议不轨，聚为‘盗贼’。”后被曹操、袁绍所歼。",
	sunzhang: "孙璋（？-189年？）东汉末期汉灵帝的宦官，官居中常侍，为十常侍之一，在张让、赵忠之下位居第三。光熹元年（189年），张让、赵忠、段珪等诛杀何进，袁绍率军入宫，诛杀孙璋。",
	bilan: "毕岚（？—189），东汉宦官，十常侍之一。十常侍朋比为奸，祸乱朝纲，制造出党锢之祸，后被袁绍诛杀。另外，毕岚曾制造翻车，用于取河水洒路。",
	xiayun: "夏恽（？—189），东汉宦官，十常侍之一。后被袁绍、曹操诛于翠花楼前。",
	hankui: "韩悝（？—189），东汉宦官，十常侍之一。后被袁绍所诛。",
	lisong: "栗嵩，东汉宦官，十常侍之一，与张让等人均一同任职中常侍。",
	duangui: "段珪（？—189），东汉宦官，十常侍之一。段珪与张让、赵忠等人朋比为奸，党同伐异，横征暴敛，卖官鬻爵，引起了以何进为首的外戚集团的不满。何进谋诛宦官，却不纳曹操、陈琳之谏，多结外镇军阀，翘首京师，与袁绍等谋诛宦竖。终于事泄，被宦官集团查知。张让、段珪等人先下手为强，斩杀何进于嘉德殿前，却也引起了京师的变乱。袁绍等人趁机带兵冲入皇宫，大肆诛杀太监。洛阳卫军变乱后，段珪与张让等人劫持少帝刘辩、陈留王刘协出逃，后被杀。",
	guosheng: "郭胜，南阳宛（今河南南阳）人。汉灵帝时为中常侍，与张让、赵忠等狼狈为奸，并皆封侯。曾助同乡何进、何太后贵幸。后被袁绍等人率兵诛灭。",
	gaowang: "高望（？~189年），京兆人，东汉宦官，十常侍之一，为小黄门兼任尚药监，颇得皇子刘辩的信任。中平六年（189年），张让等人杀害大将军何进，袁绍与王匡等人率兵杀入雒阳端门，在承明堂上斩杀中常侍高望。",
	qianzhao: "牵招（？—231年），字子经，安平郡观津县（今河北省武邑县）人。三国时期曹魏名将。牵招早年师从乐隐，与刘备成为刎颈之交。投靠冀州牧袁绍，担任冀州从事，统领乌丸突骑。袁绍死后，跟随冀州刺史袁尚，受到并州牧高干加害，投奔丞相曹操，授军谋掾。从平乌丸，出任护乌丸校尉。举茂才出身，从平汉中，授中护军。拜平虏校尉，平定东莱郡叛乱。魏文帝曹丕时期，授护鲜卑校尉，驻扎昌平，迁右中郎将、雁门太守，遏制鲜卑轲比能发展壮大。魏明帝即位，赐爵关内侯，营救护乌丸校尉田豫。太和五年，去世。",
	fuqian: "傅佥（？~263年），义阳（治今湖北省枣阳市）人，蜀汉将领傅彤之子，三国时期蜀汉名将。金长于谋略，并颇有胆勇，姜维甚爱之。傅佥官至关中都督。魏国攻伐蜀汉时，傅佥和蒋舒防守阳安关，兵败战死。",
	wangjun: "王濬（207年～286年），字士治，小名阿童，弘农郡湖县（今河南省灵宝市阌乡）人。西晋时期名将。王濬出身世家，博学多闻，容颜英俊，多谋善战。举秀才出身，起家河东郡从事。泰始八年（272年），担任广汉太守，平定益州叛乱，迁益州刺史。利用长江上游地势之利，修造战船，组建强大的水军。上书晋武帝，促成晋灭吴之战。咸宁六年（280年），率兵顺流而下，熔毁横江铁链，攻克丹阳郡，率先攻取石头城，接受吴末帝孙皓投降，完成西晋统一大业。凭借功勋，拜辅国将军、步兵校尉，册封襄阳侯。为避猜忌，纵情享受，累迁特进、抚军大将军、开府仪同三司、散骑常侍、后军将军等。太康六年十二月（286年1月18日），王濬去世，享年八十岁，谥号为“武”，安葬于柏谷山。",
	yangfu: "杨阜（172年—244年），字义山，汉天水冀县（今甘谷县东南）人。三国时期曹魏名臣。汉献帝建安初年，任凉州从事，旋拜安定长史；韦康任刺史后辟为别驾，改任州参军；后因讨马超有功，赐爵关内侯。曹操征汉中时，杨阜担任益州刺史，回来后又担任武都太守。魏明帝时，由将作大匠改少府。杨阜不但卓识远见，而且刚正不阿，敢于直言，对朝廷弊政多有诤谏，六次进言谏魏明帝应勤政爱民，魏明帝对他颇有敬畏之心。杨阜勤政廉洁，在宫内担任少府时，专管宝器、珍膳、衣物等，而他死后则家无馀财。皇帝让杨阜的孙子杨豹继任了少府之职。原甘谷县文昌宫西侧有杨氏家祠，内悬“两代尚书”匾额。",
	ruanhui: "阮氏女，是指三国时期曹魏名士许允之妻阮氏，陈留尉氏人。阮氏女是中国古代四大丑女之一，貌丑而见识非凡。她出身士族之家，是卫尉阮共（字伯彦）之女、阮侃（字德如）之妹。嫁与许允后生有二子：许奇，官至司隶校尉；许猛，官至幽州刺史。",
	peixiu: "裴秀（224年－271年4月3日），字季彦。河东郡闻喜县（今山西省闻喜县）人。魏晋时期名臣、地图学家，东汉尚书令裴茂之孙、曹魏光禄大夫裴潜之子。出身河东裴氏，少年时便颇有名气，后被大将军曹爽辟为掾属，袭爵清阳亭侯，又迁黄门侍郎。高平陵之变后，因是曹爽的故吏而被罢免。此后历任廷尉正、安东将军及卫将军司马，参与谋划军国之政，参与平定诸葛诞叛乱。因功转任尚书，进封鲁阳乡侯。魏元帝继位后，进爵鲁阳县侯，任尚书仆射。咸熙元年（264年），受命负责修改官制，又提议恢复五等爵制。五等制恢复后，获封济川侯。他建议立司马炎为世子，司马炎继位晋王后，拜裴秀为尚书令、右光禄大夫。西晋建立后，加左光禄大夫，封钜鹿郡公。泰始三年（267年），升任司空。泰始七年（271年），裴秀因服食寒食散后饮冷酒而逝世，年四十八，谥号“元”。有文集三卷。裴秀作《禹贡地域图》，开创了中国古代地图绘制学。李约瑟称他为“中国科学制图学之父”，与古希腊著名地图学家托勒密齐名，是世界古代地图学史上东西辉映的两颗灿烂明星。为纪念这位中国地图科学创始人而设立的“裴秀奖”，每两年评选一次，是中国地图学界最高奖项。由于他的贡献突出，联合国天文组织将月球正面的一个环形山命名为“裴秀环形山”。",
	liucheng: "游卡桌游的原创人物。设定为黄忠的妻子。",
	jiangwan: "蒋琬（？－246年），字公琰。零陵郡湘乡县人。三国时期蜀汉政治家，与诸葛亮、董允、费祎合称“蜀汉四相”。蒋琬最初随刘备入蜀，为广都县长。因其不理政事，惹怒刘备，在诸葛亮的劝说下才免于一死。后重获启用，受到诸葛亮的悉心培养，累官丞相长史兼抚军将军。建兴十二年（234年），诸葛亮去世，蒋琬继其执政，拜尚书令，又加行都护、假节，领益州刺史，再迁大将军，录尚书事，封安阳亭侯。延熙元年（238年），受命开府，加大司马，总揽蜀汉军政。曾制定由水路进攻曹魏的计划，但未被采纳。延熙九年（246年），蒋琬病逝，谥号为恭。",
	sunhanhua: "孙寒华，三国时女仙。梁·陶弘景《真诰》卷一三、五代·杜光庭《墉城集仙录》卷七：其父孙贲为孙权堂兄，寒华少时与杜契有私情，后从杜契受玄白之要，颜容日少。周旋吴越诸山十馀年，得道仙去。《鉴后集》卷四：一云即吴大帝孙权之女。于茅山修道，道成，冲虚而去，因号其山为华姥山。山在茅山崇禧观前。《神异典》卷二五九人于明代，误。",
	yanpu: "阎圃，生卒年不详，是益州巴西安汉（今四川省南充市）人。张鲁割据巴、汉，就以阎圃为功曹。东汉末年人物，本为张鲁部下谋士，后随张鲁一同投降曹操，封平乐乡侯。",
	mayuanyi: "马元义（？—184年6月7日），东汉末年黄巾之乱的组织者之一，是黄巾大方首领。光和六年（183年），马元义奉黄巾军首领张角之命，筹划起事的准备工作。马元义聚集荆州、扬州信徒数万人约定于邺城相会，并收买中常侍封谞、徐奉等为内应，准备于次年（甲子年）三月初五（戊申日）内外同时起事。由于张角弟子济南人唐周的告密，马元义于于中平元年（184年）正月在河内郡山阳县被捕，送往洛阳车裂，同时被杀的还有教众近千人。由于马元义的被杀，迫使张角提前于二月起兵发动叛乱。",
	simafu: "司马孚（180年－272年4月3日），字叔达。河内郡温县（今河南温县）人。三国曹魏至西晋初年重臣，西晋宗室，东汉京兆尹司马防第三子，晋宣帝司马懿之弟。自曹操时代起，司马孚就任文学掾，而后历仕魏国五代皇帝，累迁至太傅。司马孚在“高平陵事变”之际，协助司马懿控制京师，诛杀曹爽一党。后又督军成功防御吴、蜀的进攻，为司马氏政权的稳固多有功劳。但他性格十分谨慎，自司马懿执掌大权起，便逐渐引退，更未直接参与司马氏废立魏帝的谋划。西晋代魏后，司马孚进拜太宰，封安平王。晋武帝司马炎对他十分尊宠，但他并不以此为荣，至死仍以魏臣自称。泰始八年二月壬辰日（272年4月3日），司马孚去世，年九十三。武帝为其举哀三日，葬礼规格比照东汉东平献王刘苍，赐谥献王。",
	sunchen: "孙綝（231年－259年1月18日），字子通，吴郡富春（今浙江杭州市富阳区）人。三国时期吴国宗室、权臣，昭义中郎将孙静曾孙、定武中郎将孙暠之孙、安民都尉孙绰的儿子。门荫入仕，初任偏将军。太平元年（256年），升任侍中、武卫将军、都督中外诸军事。掌权以后，诛杀大司马滕胤、骠骑将军吕据等重臣，升任大将军，册封永宁县侯。嗜好杀戮，与皇帝孙亮的矛盾激化，最终废黜孙亮，拥立琅琊王孙休即位，累迁丞相、荆州牧。永安元年十二月（259年1月），在左将军张布的协助下，遭到皇帝孙休捕杀，时年二十八岁，削除宗籍，改姓故氏。",
	qiaozhou: "谯周（201年－270年），字允南，巴西郡西充国县（今四川西充县槐树镇）人。三国时期蜀汉大臣、学者、儒学家、史学家。幼年丧父，少读典籍，精研六经，颇晓天文，成为蜀地大儒之一，门下有陈寿、罗宪等学生。诸葛亮担任益州牧时，授劝学从事。诸葛亮死后，不顾朝令，前往奔丧。后主刘禅册立太子时，授太子仆，迁太子家令、光禄大夫。反对姜维北伐，著《仇国论》，力陈北伐之失。炎兴元年（263年），邓艾攻打成都时期，力劝刘禅投降，“有全国之功”，投降魏国后，受封阳城亭侯，迁骑都尉。泰始六年（270年），授散骑常侍，同年去世，时年七十岁。",
	gongsunkang: "公孙康（生卒年不详），辽东襄平（今辽宁辽阳）人。东汉末年辽东地区割据军阀，辽东太守公孙度长子（一作庶子）、车骑将军公孙恭之兄。公孙康在其父死后继任辽东太守。建安十二年（207年），擒斩图谋不轨的袁尚、袁熙兄弟，将其首级献予曹操，被拜为左将军，封襄平侯。建安十四年（209年），公孙康大破高句丽，陷其国都，并讨伐韩濊，设置带方郡。死后因二子年幼，由公孙恭继任。曹丕称帝后，被追赠为大司马。",
	zhouqun: "周群（生卒年不详），字仲直，巴西阆中（今四川阆中）人。周群年少时随父周舒学习占验天算之术。后来刘璋聘请周群为师友从事，其预言大多得以应验。刘备割据益州，任命周群为儒林校尉。曾劝说刘备攻汉中必定不利，事后得到应验，被举荐为茂才。",
	dongzhao: "董昭（156年－236年7月4日），字公仁，济阴定陶（今山东省菏泽市定陶区）人。东汉末年曹魏谋士、重臣、开国元勋。董昭年轻时被举为孝廉，后担任袁绍帐下参军。多有战功，但是袁绍听信谗言，董昭不得已离开袁绍投奔张杨。张杨率军迎接汉献帝时，董昭随行，并拜为议郎。后与曹操在洛阳相见，又建议曹操将汉献帝迎接到许昌。董昭自此成为曹操的谋士。建安年间（198年）历任河南尹、冀州牧、徐州牧、魏郡太守等职，多有功劳，深受曹操器重。曹操受封魏公、魏王的谋划都是出自董昭之手。曹丕继魏王位后，董昭任将作大匠。曹丕称帝后，升任大鸿胪。此后先后担任侍中、太常、光禄大夫、太仆等重要职位。魏明帝曹叡即位后转任卫尉。太和六年（232年）升任司徒。青龙四年（236年）卒，时年八十一，谥曰定。",
	nanhualaoxian: "南华老仙，是古典小说《三国演义》中的虚拟人物。其原型来自道教典籍中对庄子的封号，又称“南华仙人”、“南华真人”等。在古典小说《三国演义》通行本的第一回中，描述了南华老仙将《太平要术》赠送给张角的情节。",
	chenzhen: "陈震（？—公元235年），字孝起。荆州南阳郡（今河南南阳）人。三国时期蜀汉官员。刘备领荆州牧时，辟陈震为从事。后随刘备入蜀，为蜀郡北部都尉、汶山太守、犍为太守。建兴三年（225年），拜尚书，迁尚书令。建兴七年（229年），孙权称帝。蜀汉以陈震为卫尉，前往祝贺，与孙权开坛歃盟，交分天下。还蜀，封城阳亭侯。建兴十三年（235年），卒。",
	hucheer: "胡车儿（生卒年不详），东汉末年武将，初从张绣，为其心腹猛将，勇冠三军，与贾诩交情甚佳。宛城大战后，张绣投降曹操，曹操爱胡车儿之骁勇，手以黄金与之。后因曹操私纳张绣亡叔张济的遗孀邹氏，张绣深感其辱，欲杀曹操，与贾诩商议后决心反曹。《三国演义》中，作者考虑到典韦的勇猛，便增加了令胡车儿盗走典韦的双戟的情节。最终典韦、曹昂（曹操长子）、曹安民（曹操侄子）皆死于此次战斗。野史说胡车儿跟随曹操征战，被赵云在长坂坡上红枪挑死。",
	simashi: "司马师（208年～255年3月23日），字子元，河内温县（今河南省温县）人。三国时期曹魏权臣，西晋王朝的奠基人之一，晋宣帝司马懿与宣穆皇后张春华的长子，晋文帝司马昭的同母兄，晋武帝司马炎的伯父。司马师沉着坚强，雄才大略，早年与夏侯玄、何晏齐名。高平陵政变后，以功封长平乡侯，旋加卫将军。司马懿死后，以抚军大将军辅政，独揽朝廷大权，次年升为大将军。掌权后，他制定选拔官吏的法规，命百官推荐贤才，整顿纲纪，使其各有职掌，朝野肃然。司马师也有卓越的军事才能，曾用计于新城之战击溃吴国诸葛恪的大军。嘉平六年（254年），魏帝曹芳与中书令李丰等人密谋除司马师，事情泄露，司马师杀死参与者，迫郭太后废曹芳，改立高贵乡公曹髦为帝。次年，亲自率兵平定毌丘俭、文钦之乱。回师途中病死，时年四十八岁，谥号“忠武”。后被追尊为晋景王。西晋建立后，被追尊为景皇帝，庙号世宗。",
	yanghuiyu: "羊徽瑜（214年－278年），泰山南城（今山东新泰）人，晋景帝司马师第三任妻子。羊徽瑜出身官宦世家泰山羊氏，她是南阳太守羊续的孙女，上党太守羊衜之女；其母为东汉名士左中郎将蔡邕之女、蔡文姬的姐妹。羊徽瑜聪慧贤德，嫁给司马师后未有子女。以司马师之弟司马昭的次子司马攸为继子。司马师死后，司马攸侍奉羊徽瑜非常孝顺。泰始元年（265年），司马昭长子司马炎受禅登基，建立西晋，追谥伯父司马师为景皇帝。泰始二年（266年），尊奉羊徽瑜为景皇后，因居弘训宫，故称弘训太后。咸宁四年（278年），羊徽瑜去世，时年六十五岁，谥号景献皇后，与司马师合葬峻平陵。",
	dingyuan: "丁原（？—189年），字建阳，兖州泰山郡南城县（山东省平邑县郑城镇）人。东汉末年军阀，官拜执金吾、并州刺史。任并州刺史期间，他亲近、善待主簿吕布，又调遣部下张杨、张辽等名将到洛阳任职。汉灵帝驾崩后，带兵进入洛阳，担任执金吾，并与大将军何进谋划诛杀十常侍，但不久事情败露，何进被宦官杀死。在宦官被诛灭之后，丁原与军阀董卓在废帝问题上意见不合产生矛盾，于是董卓诱使吕布将其杀害，其势力亦被吞并。",
	furong: "傅肜（？－222年），义阳（今湖北枣阳）人，三国时蜀汉将领。刘备攻伐吴国时，傅肜为别督。后刘备被陆逊击败，傅肜率部断后，奋战至死。死前怒斥道：“吴狗！何有汉将军降者！”",
	zhengxuan: "郑玄（127年－200年），字康成。北海郡高密县（今山东省高密市）人。东汉末年儒家学者、经学大师。郑玄曾入太学攻《京氏易》、《公羊春秋》及《三统历》、《九章算术》，又从张恭祖学《古文尚书》、《周礼》和《左传》等，最后从马融学古文经。游学归里之后，复客耕东莱，聚徒授课，弟子达数千人，家贫好学，终为大儒。党锢之祸起，遭禁锢，杜门注疏，潜心著述。晚年守节不仕，却遭逼迫从军，最终病逝于元城，年七十四。郑玄治学以古文经学为主，兼采今文经学。他遍注儒家经典，以毕生精力整理古代文化遗产，使经学进入了一个“小统一时代”。著有《天文七政论》、《中侯》等书，共百万余言，世称“郑学”，为汉代经学的集大成者。唐贞观年间，列郑玄于二十二“先师”之列，配享孔庙。宋代时被追封为高密伯。后人建有郑公祠以纪念。",
	dengzhi: "邓芝（178年－251年），字伯苗。义阳郡新野县（今河南新野）人。东汉名将邓禹之后，三国时期蜀汉重臣。邓芝早年曾被预言能位至大将，后被刘备任为郫令，升迁为广汉太守。因任官公廉且有治绩，被征入朝为尚书。刘备逝世后，奉命出使吴国，成功修复两国关系，并深为吴大帝孙权所赏识。建兴六年（228年），丞相诸葛亮策划北伐，命邓芝与大将赵云佯攻郿城，以吸引魏国曹真军主力。建兴十二年（234年），迁前军师、前将军，领兖州刺史，封阳武亭侯，不久督领江州。延熙六年（243年），迁车骑将军，后授假节。又率军平定涪陵叛乱。延熙十四年（251年），邓芝病逝。邓芝性格正直、简单，不刻意修饰情绪。他为将二十多年，赏罚明断，体恤士卒。身上的衣食取自官府，从未经营过私产，妻儿甚至还有忍饥挨饿之时，死时家中也没有多余财物。",
	yangyi: "杨仪（？－235年），字威公，襄阳（今湖北襄阳）人，三国时期蜀汉官员。最初为荆州刺史傅群的主簿，后投奔关羽，任为功曹。关羽遣其至成都，大受刘备赞赏，擢为尚书。因与尚书令刘巴不和，调为弘农太守。建兴三年（225年）任丞相参军，此后一直跟随诸葛亮战斗。亮卒，他部署安全退军。诸葛亮在生前定蒋琬继己任，杨仪仅拜中军师。建兴十三年（235年），因多出怨言，被削职流放至汉嘉郡。但杨仪仍不自省，又上书诽谤，言辞激烈，最后下狱，自杀身亡。",
	dongcheng: "董承（？~200年），字号不详，冀州河间人（今河北献县）人。东汉末年外戚大臣，汉灵帝母亲董太后侄子，汉献帝嫔妃董贵人之父。初从西凉军，为董卓女婿牛辅部曲。护卫汉献帝刘协从长安东归洛阳，拜为卫将军，受封列侯。建安四年（199年），拜车骑将军。自称领受汉献帝衣带诏，联合刘备、种辑、吴子兰、王子服、吴硕等人密谋诛杀曹操。五年正月，图谋泄露，董承诸人及董贵人全部遇害。",
	chendeng: "陈登（163—201），字元龙，下邳淮浦（今江苏涟水西）人。东汉末年将领、官员。沛相陈珪之子。为人爽朗，性格沈静，智谋过人，少年时有扶世济民之志，并且博览群书，学识渊博。二十五岁时，举孝廉，任东阳县长。虽然年轻，但他能够体察民情，抚弱育孤，深得百姓敬重。后来，徐州牧陶谦提拔他为典农校尉，主管一州农业生产。他亲自考察徐州的土壤状况，开发水利，发展农田灌溉，使汉末迭遭破坏的徐州农业得到一定程度的恢复，百姓们安居乐业，“秔稻丰积”。建安初奉使赴许，向曹操献灭吕布之策，被授广陵太守。以灭吕布有功，加伏波将军。又迁东城太守。年三十九卒。其子陈肃，魏文帝时追陈登之功，为郎中。",
	yangbiao: "杨彪（142年－225年），字文先。弘农郡华阴县（今陕西华阴）人。东汉末年名臣，太尉杨赐之子、名士杨修之父。杨彪少年时受家学熏陶，初举孝廉、茂才。其后征拜为议郎，参与续写《东观汉记》。任京兆尹时，揭发黄门令王甫的贪赃行为，使其被定罪诛杀。累任侍中、五官中郎将、卫尉等职。汉献帝时，遍历三公（司空、司徒、太尉）之职。权臣董卓意图迁都时，他据理力争。献帝东迁时，杨彪尽节护主。曹操挟献帝定都许县后，将杨彪下狱，获释后又任太常。他见汉室衰微，便诈称脚疾，不理世事。曹魏建立后，拒绝出任太尉，改光禄大夫，待以客礼。黄初六年（225年），杨彪去世，年八十四。其著作现仅存《答曹公书》一篇。",
	zhangyì: "张翼（？－264年），字伯恭，益州犍为郡武阳县人。三国时期蜀汉将领。历任梓潼、广汉、蜀郡三郡太守，出任庲降都督，后随诸葛亮和姜维北伐，官至左车骑将军，领冀州刺史。初封关内侯，进爵都亭侯。蜀汉灭亡后，魏将钟会密谋造反，成都大乱，张翼亦为乱兵所杀。张翼是蜀汉第三任庲降都督，由于执法严厉，不得南夷欢心。在北伐上，张翼认为国小民疲，不应滥用武力，是蜀汉朝廷当时极少敢当朝和姜维争辩北伐问题的大臣。",
	jiakui: "贾逵（174年—228年），本名贾衢，字梁道，河东襄陵人（今山西临汾县）。汉末三国时期魏国名臣，西晋开国功臣贾充父亲。初为并州郡吏，迁渑池县令，拜弘农太守，历仕曹操、曹丕、曹叡三世，是曹魏政权中具有军政才干的人物，终其一生为魏国统一事业作出卓越贡献。担任豫州刺史期间，兴修水利，凿通运河二百余里，时称“贾侯渠”，便利民生。随同曹丕伐吴，进封阳里亭侯，加号建威将军。石亭之战，率军救出曹休。太和二年，去世，赠本官，谥号为肃，《唐会要》将其尊为魏晋八君子之一。",
	shenpei: "审配（？－204年），字正南，魏郡阴安（今河北清丰北）人。为人正直， 袁绍领冀州，审配被委以腹心之任，并总幕府。河北平定，袁绍以审配、逢纪统军事，审配恃其强盛，力主与曹操决战。曾率领弓弩手大破曹军于官渡。官渡战败，审配二子被俘，反因此受谮见疑，幸得逢纪力保。袁绍病死，审配等矫诏立袁尚为嗣，导致兄弟相争，被曹操各个击破。曹操围邺，审配死守数月，终城破被擒，拒不投降，慷慨受死。",
	hujinding: "胡金定，女，传说中关羽之妻。关索之母，配偶关羽，出处《花关索传》和元代《三国志评话》民间传说人物。",
	zhangbu:"张布（？-264年），三国时吴国将领。张布在孙休受封为琅琊王时，为左右将督。太平三年（258年），孙休即位后，张布由长水校尉迁辅义将军，封永康侯。不久，孙休听说孙綝阴谋反叛，于是暗中和张布商量计策，孙綝被杀后，左将军张布因功加封中军督。由于孙休对张布厚加恩宠，因此张布专擅朝廷大权，多行无礼之事。永安七年（264年），孙休去世，丞相濮阳兴、左将军张布推荐孙皓为帝。同年八月初三，孙皓即皇帝位，封张布为骠骑将军，加侍中。孙皓粗暴骄盈、暴虐治国，又好酒色，濮阳兴和张布暗地里感到后悔，有人将此事报告孙皓，濮阳兴和张布二人被诛。",
	mb_wangjing:"王经（？—260年），字彦纬，冀州清河郡人，三国时代曹魏大臣。《三国志》无传。王经为农民出身，因得到同乡崔林的赏识，被提拔任官。其母说他太快出头会不吉利，但他平步青云，历任江夏太守、雍州刺史。正元二年（255年），蜀将姜维攻入陇西郡时，他率军出狄道城迎击蜀军，却被击败。被包围在城中，陷入穷途末路的境况。幸亏得到大将陈泰和邓艾的援助，合力击破姜维，才脱险。此后，他被朝廷召回。不久迁司隶校尉、尚书。甘露五年（260年），魏帝曹髦召见王沈、王经、王业，提出进讨司马昭的计划。王经进谏，但曹髦不听；王沈、王业向司马昭告密，王经不从。司马昭弑君后，王经因未向司马昭告急，而和其母一同被逮捕并被处死。",
};

export default characterIntro;
