"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ChapterTitle from "@/components/ChapterTitle";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

const categories = ["All", "Gym Life", "Training", "Coaches", "Boxing", "Kids", "Community", "Portraits", "Tournaments", "Documentary"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "All">;
  aspect: string;
}

const galleryImages: GalleryImage[] = [
  // Gym Life
  { src: "/images/vfba-gym-real.jpg", alt: "VFBA gym interior", caption: "The VFBA gym in Chinotimba", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-scene.jpg", alt: "Gym interior", caption: "The gym at golden hour", category: "Gym Life", aspect: "aspect-[16/9]" },
  { src: "/images/vfba-gym-action-1.jpg", alt: "Gym action", caption: "Boxer hitting pads", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-action-2.jpg", alt: "Gym action", caption: "Training in the ring", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-action-3.jpg", alt: "Gym action", caption: "Working the heavy bag", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-life-1.jpg", alt: "Gym life", caption: "Day-to-day at the gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-life-2.jpg", alt: "Gym life", caption: "Atmosphere inside VFBA", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-gym-clients-real.jpg", alt: "Gym clients", caption: "Community members training", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/480870606_1184379373484686_1469002131680661981_n.jpg", alt: "Gym scene", caption: "Inside the VFBA gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/482224799_1195778152344808_2648365003837558636_n.jpg", alt: "Gym scene", caption: "Training floor", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/482960059_1199286355327321_2980685375075612466_n.jpg", alt: "Gym scene", caption: "Boxers at the gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/483915948_1198141645441792_1127377990876423391_n.jpg", alt: "Gym scene", caption: "VFBA gym life", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/484333696_1199286695327287_2268663116384874674_n.jpg", alt: "Gym scene", caption: "Everyday at the gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/484804056_1202169451705678_8580184227794579889_n.jpg", alt: "Gym scene", caption: "Boxing gym atmosphere", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/485106025_1207291421193481_2785766442265530982_n.jpg", alt: "Gym scene", caption: "The VFBA workspace", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/486370932_1208833604372596_5208143495162938627_n.jpg", alt: "Gym scene", caption: "Boxing equipment", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/487421682_1214855787103711_1009523473563192783_n.jpg", alt: "Gym scene", caption: "Training space", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/490317686_1229482152307741_3676807925427219800_n.jpg", alt: "Gym scene", caption: "VFBA facility", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/490508910_1229202685669021_3937034948918794466_n.jpg", alt: "Gym scene", caption: "Gym interior", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/490859928_1232041798718443_610635189048031051_n.jpg", alt: "Gym scene", caption: "Boxing gym life", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/491753476_1236238038298819_8494571067767878021_n.jpg", alt: "Gym scene", caption: "At the gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/492052510_1232058912050065_4522098081768827008_n.jpg", alt: "Gym scene", caption: "VFBA training ground", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/492219885_1238146161441340_6008428964545517270_n.jpg", alt: "Gym scene", caption: "Boxing gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/495367538_1249848753604414_8084220314480372901_n.jpg", alt: "Gym scene", caption: "Inside VFBA", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/508195292_1284112466844709_310232360339446839_n.jpg", alt: "Gym scene", caption: "Gym activity", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/518376732_1308736737715615_4075578870866874626_n.jpg", alt: "Gym scene", caption: "Boxing gym day", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/534722576_1337626188160003_8506244140054439149_n.jpg", alt: "Gym scene", caption: "VFBA atmosphere", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/557805024_1382402927015662_2238752281099551349_n.jpg", alt: "Gym scene", caption: "The gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/560849538_1388990266356928_3827944235893007335_n.jpg", alt: "Gym scene", caption: "Boxing space", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/575094255_1409075611015060_6160772578830335009_n.jpg", alt: "Gym scene", caption: "VFBA gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/597154827_1442298651026089_4822695164372318861_n.jpg", alt: "Gym scene", caption: "Training facility", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/653708798_1520360546553232_7115517111563741305_n.jpg", alt: "Gym scene", caption: "Boxing gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/671588739_1540853977837222_93989753473564182_n.jpg", alt: "Gym scene", caption: "The space", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/703335619_1573084387947514_8644643944198247453_n.jpg", alt: "Gym scene", caption: "VFBA interior", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/707316552_1576660964256523_747545068726262441_n.jpg", alt: "Gym scene", caption: "Gym", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/76765497_105096367652835_9064364938738270208_n.jpg", alt: "Gym scene", caption: "Early days", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/78466248_100248571470948_3217785044282114048_n.jpg", alt: "Gym scene", caption: "VFBA beginnings", category: "Gym Life", aspect: "aspect-[4/3]" },
  { src: "/images/87961288_138404027655402_1413869827587571712_n.jpg", alt: "Gym scene", caption: "Gym days", category: "Gym Life", aspect: "aspect-[4/3]" },

  // Training
  { src: "/images/vfba-training-session-1.jpg", alt: "Training session", caption: "Morning training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-session-2.jpg", alt: "Training session", caption: "Technique drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-session-3.jpg", alt: "Training session", caption: "Conditioning work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-1.jpg", alt: "Training", caption: "Training at VFBA", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-training-2.jpg", alt: "Training", caption: "Building fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-group-training-1.jpg", alt: "Group training", caption: "Community group session", category: "Training", aspect: "aspect-[16/9]" },
  { src: "/images/vfba-group-training-2.jpg", alt: "Group training", caption: "Group fitness", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-group-training-3.jpg", alt: "Group training", caption: "Team training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/106044415_172254244270380_1980611859544600330_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/118765329_190614342434370_3588402784177644865_n.jpg", alt: "Training", caption: "Boxing training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/123526906_207762304052907_7099081294647668771_n.jpg", alt: "Training", caption: "Training drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/123557046_207762257386245_813608226708273728_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/179863052_315627886599681_3667793963923707683_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/179933424_315627929933010_1062748035159319125_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/179956344_315627829933020_1443634718888179220_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/180877599_315627983266338_7137079244335925703_n.jpg", alt: "Training", caption: "Technique session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/181166573_315627946599675_3642659942753233870_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/475677070_1165097812079509_1971907052450843426_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/476131156_1169335668322390_5231236570089627751_n.jpg", alt: "Training", caption: "Training drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/479699904_1177739707481986_161479611196813847_n.jpg", alt: "Training", caption: "Boxing workout", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/480305746_1178371070752183_2752392117901434569_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/480353967_1178371064085517_4532041220181568902_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/480486826_1178371190752171_2330144588924753317_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/480487069_1177739294148694_4738256574462156693_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/480622522_1178371197418837_3373970876394276396_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/481255161_1199286595327297_803998390335549435_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/481516145_1195778142344809_41548041426092991_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/481787138_1192049856050971_5378754272854636858_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/481906183_1195778469011443_5976994658196271485_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/481943567_1195778162344807_3318393572159139843_n.jpg", alt: "Training", caption: "Boxing training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/481955662_1195778139011476_4359823147602559499_n.jpg", alt: "Training", caption: "Pad drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482001499_1195778185678138_5467062305306489326_n.jpg", alt: "Training", caption: "Conditioning work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482006181_1195778135678143_406018886967082835_n.jpg", alt: "Training", caption: "Technique drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482061413_1195778159011474_8387822265365227905_n.jpg", alt: "Training", caption: "Skill building", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482061776_1195778165678140_3151463234360072109_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482072204_1195778112344812_349053454766302363_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482322466_1195778145678142_3703349493245982214_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482344855_1195778489011441_3308216073596620495_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482959475_1199286558660634_3864532661536991234_n.jpg", alt: "Training", caption: "Workout session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482960467_1199286565327300_4246649213485402079_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482961334_1199286321993991_5713271303276849269_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482975867_1199286508660639_4038018684692962600_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482977852_1199286568660633_6083878775505779135_n.jpg", alt: "Training", caption: "Boxing work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482980624_1199286411993982_1503973994479287187_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482981574_1199286731993950_8118324016694064610_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482982081_1199286498660640_8085087091402605837_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482982230_1199286551993968_2879525401889239295_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482985200_1199286698660620_7129894633116988390_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482985450_1199286331993990_6594918281842960288_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/482986990_1199286511993972_5016854537955073390_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/483609801_1199286725327284_5908255888450653885_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/483918166_1195778179011472_3013871357765352560_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484036027_1199286405327316_5405728082421268021_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484050998_1203632198226070_7426067148871097988_n.jpg", alt: "Training", caption: "Workout", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484068193_1199286305327326_1096751253321155666_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484075258_1199286575327299_3728561238151767375_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484103581_1199286345327322_7250062017485609809_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484168747_1199286611993962_688861669668682390_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484487239_1203632308226059_2852039825555413944_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484619208_1202749791647644_1678620887011606222_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484636870_1204400654815891_8114121928476146627_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484654063_1204400824815874_8389420747907032316_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484656882_1204400651482558_6979925026675518033_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484791827_1204400658149224_115906706538344116_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484812217_1202880084967948_3813634100617576092_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484841832_1204400441482579_7238347263207188062_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484895544_1202177241704899_723564588687751302_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484921059_1204400861482537_4053547743393607913_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484943510_1207292747860015_8342992108565439901_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/484974776_1204400434815913_4139236978399640822_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485118746_1204400408149249_5666706760390738467_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485310932_1204400648149225_4162308628002729515_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485344862_1204400874815869_7590826300719489593_n.jpg", alt: "Training", caption: "Fitness work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485366698_1207292941193329_5447412693657245970_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485799194_1204400888149201_9072204357302603114_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485801990_1204400588149231_4586034797395787044_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485876225_1207292974526659_6781924032834294246_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/485983259_1206297817959508_2177254095365836401_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/486287007_1207292724526684_6651307930720236212_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/486459842_1209845887604701_528935491427013513_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/486780211_1212852913970665_3804516926362878648_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/489791656_1225579806031309_2282343601713258444_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/489892037_1225932802662676_1693636312087311657_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/489952855_1229064442349512_8618440520701894150_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/489957844_1225933059329317_797618506843847910_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490024340_1228623715726918_4277088739993542654_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490030529_1229093715679918_7387909135316531886_n.jpg", alt: "Training", caption: "Training drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490137608_1226727349249888_5728501111152765995_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490143928_1227784912477465_1559988586619077630_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490179523_1227785002477456_908274784896496273_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490196943_1227784852477471_4489584272757230134_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490212703_1227784982477458_5219691035547484475_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490216816_1228640559058567_4579799888612143663_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490230340_1226727399249883_8797118228226634840_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490233123_1229064545682835_6026209959514821836_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490267207_1227785212477435_3064442484437803271_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490292143_1227784989144124_2025110796701892565_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490297993_1226727405916549_7541823617028384776_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490300566_1226727269249896_1792194246168584307_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490328113_1227784985810791_5928142969014823614_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490336937_1229064222349534_7169038534897533422_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490341004_1229577908964832_2428970890132251397_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490343733_1229498422306114_3049221821198674296_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490347386_1229498105639479_6064632012661451803_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490353041_1227784935810796_7519961832997002913_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490355780_1229496345639655_3785568884065561504_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490355956_1227784925810797_133323465504295352_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490358570_1227784919144131_5839453219509922449_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490367859_1229011369021486_8441565531624553837_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490414101_1229498115639478_614117259712429726_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490421449_1229578022298154_2459081110416185763_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490435443_1226727419249881_4864518796647570705_n.jpg", alt: "Training", caption: "Pad drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490444893_1229583772297579_7708828749230940214_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490454045_1229951868927436_5322801600909689507_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490455564_1227784972477459_3697836280624976267_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490458108_1229498082306148_2168596968401011338_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490458161_1228118975777392_2781543555412030684_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490459425_1229011719021451_1570732413387208589_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490464436_1225553739367249_679641615069474845_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490466914_1229202662335690_3641416936619179532_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490475497_1228119095777380_7476202793778070746_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490491418_1227784959144127_811788291284811920_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490492122_1229064555682834_8577523591510554400_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490492522_1226727215916568_737725919740044787_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490495121_1229064262349530_1899815318770517789_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490511836_1230534045535885_1142771945904261227_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490525235_1229684222287534_5731333946033044387_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490536923_1229498212306135_4314532453808664361_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490540917_1229683818954241_8055890126457855823_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490545781_1230534175535872_3339619867606663688_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490559282_1227785152477441_3377734132320290370_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490590382_1229621908960432_5574438397761529978_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490597283_1227785229144100_2976700805296607539_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490599030_1229011665688123_8804136167942383708_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490653000_1227784915810798_6508876940183824276_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490653595_1227784969144126_937200782404031865_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490667640_1228887722367184_7853891044223913116_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490692684_1227784922477464_2839308113210933818_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490692936_1229577922298164_2287401755574759736_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490704009_1230534055535884_4418274032592669471_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490713301_1229684088954214_2769700124949455423_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490717439_1227784965810793_8050096534924340256_n.jpg", alt: "Training", caption: "Training drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490717940_1229202655669024_8220431613809668144_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490733958_1227784999144123_4757534275867831272_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490737257_1229622388960384_3812288964730724097_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490775823_1227785005810789_4779153628586166005_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490794871_1229684008954222_8583790291833272583_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490805842_1229621925627097_4273687003321086395_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490812275_1229011459021477_1938817420041010314_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490813767_1229951442260812_3092263041973055484_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490815261_1229064435682846_885616403767287443_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490823351_1229498285639461_3547781810072501024_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490855491_1230169305572359_3395796472452023888_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490915218_1230153982240558_598857858123490290_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490917682_1230162012239755_1866867508016165949_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490950017_1230162592239697_7763601521668746114_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490951816_1229482158974407_6362330791807909215_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490951820_1229498125639477_1376937017848602695_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490959129_1230169282239028_3953865966775070968_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490979185_1229621932293763_7364761313998110573_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/490986309_1229621838960439_8974943288959865336_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491138102_1230154002240556_2463817652020119930_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491250665_1230169288905694_461536357640028250_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491328434_1231789162077040_9124292400571181582_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491412990_1231662792089677_1830486717518017135_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491413112_1230161815573108_7201600431573416711_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491416810_1232041392051817_8083358215758773793_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491453643_1228887712367185_3977078304670760157_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491483392_1229683822287574_1347133020260028605_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491607096_1230161905573099_1090649931161591691_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491668164_1230169258905697_3751133808257026406_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491680154_1231789198743703_8157575494025802939_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491712131_1229496492306307_5358976716226458691_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491745620_1230169312239025_5417804181188361753_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491779349_1230161948906428_7343542165604104963_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491796346_1236238074965482_8522401491878917713_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491810050_1231789205410369_3554351257492424787_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491847927_1229577912298165_7042570510393554407_n.jpg", alt: "Training", caption: "Pad drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/491857835_1230812108841412_7003839461907419608_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/492000755_1231789138743709_5492309985086280156_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/492003185_1230161892239767_2830128416511008922_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/492193386_1231662745423015_2132082275035767007_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/508209070_1284112400178049_1416056747104140884_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/508530068_1284112510178038_2778987829976257623_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/508661621_1284112536844702_5956595835894025973_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/508861746_1285679083354714_2804444879571455073_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/509308818_1285679106688045_2565563733940770337_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/509417939_1285679170021372_6850354114565770292_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/509425947_1285679130021376_8198851328356243049_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/509441313_1285679150021374_2881897313971311647_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/511156217_1289019063020716_2874998394525992016_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/511197893_1289019049687384_5219782818294230200_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/511200078_1289019023020720_5286370404114729357_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/514041963_1295049485751007_8783188721700034591_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/514046106_1295049499084339_8725735414954421911_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/514066080_1295049562417666_3630748196739730418_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/514223610_1295049535751002_5429185529480680464_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/514354611_1295049532417669_4466545230631137540_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/514356270_1295049462417676_7396618246279839717_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/516549603_1302025765053379_3738887042319934012_n.jpg", alt: "Training", caption: "Boxing drill", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/518292602_1302025745053381_608064333633840300_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/518318629_1302025721720050_6717794278411906079_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/518403013_1308736734382282_6316747781516938057_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/528383523_1327743682481587_930158663912854549_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/528605029_1327743615814927_4094304471466827940_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/529329878_1327743639148258_7135503564993888596_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/529539348_1327743605814928_7216283746008407421_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/536023530_1337633941492561_7903083018282101155_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/539269571_1346007407321881_8461100331524629892_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/540887554_1346007427321879_509337864906855071_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/545549595_1356765919579363_4102255304910511724_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/545568177_1356774132911875_4568969276169753614_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/557972653_1382402910348997_7451944426006592482_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/558521982_1382402913682330_4820097870225384687_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/558676243_1382402937015661_6652465892328660877_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/558887746_1382402940348994_4069224835942711672_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/558980903_1382402907015664_639419142775992895_n.jpg", alt: "Training", caption: "Pad drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/559395725_1382402887015666_443050691829417498_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/559451903_1382402947015660_4379375504062637826_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/565788920_1394503382472283_7496231030984556605_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/566230066_1394503442472277_8728692097433124803_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/567968936_1394503385805616_1116503859328762905_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/568638001_1394503419138946_1482034927191244013_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/576319431_1409075594348395_2996138270258383588_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/576917581_1409075584348396_5017076548112466680_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/576995423_1409075591015062_7671152415679678833_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/576995506_1409075597681728_1434351887643650604_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/577583960_1409075581015063_5980902966510349745_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/597827242_1442298694359418_5324551169887447924_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/597886250_1442298701026084_8188947635974066399_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/597908699_1442298667692754_295222914516791890_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/598173227_1443857894203498_6159272736714588419_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/598343637_1442298661026088_3132394627152294181_n.jpg", alt: "Training", caption: "Pad work", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/599937878_1442298654359422_5803893917317526341_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/599949770_1447113937211227_2847380786749587372_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/601437303_1447113953877892_232903357083863214_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/604763001_1448613543727933_7043886569413602789_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/606043363_1453921519863802_3170072271583967093_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/615216362_1463714012217886_1282705486481873712_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/615865808_1463714005551220_4201498699746620913_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/617263546_1470524621536825_612441741792357779_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/654446037_1520360083219945_7179571584351524469_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/655166641_1520360089886611_7152765319625497046_n.jpg", alt: "Training", caption: "Fitness training", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/655246550_1520360086553278_2137473037592315199_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/659743865_1530109928911627_2396755973777862342_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/660180362_1530985758824044_4657639596826114247_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/662098749_1530101932245760_4848979706245024138_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/662824049_1530109942244959_4357474450894887265_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/671855777_1540853974503889_1916825728666889728_n.jpg", alt: "Training", caption: "Pad drills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/672019741_1540853934503893_6455948782109249816_n.jpg", alt: "Training", caption: "Working the bag", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/672197034_1540853971170556_2515183181705460443_n.jpg", alt: "Training", caption: "Training intensity", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/672670456_1543377964251490_1361809740995226004_n.jpg", alt: "Training", caption: "Boxing basics", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/675451183_1545818570674096_6521300336683998182_n.jpg", alt: "Training", caption: "Building skills", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/677101863_1547266160529337_1997763021801676297_n.jpg", alt: "Training", caption: "Training fundamentals", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/677180163_1547266087196011_6196567298600834467_n.jpg", alt: "Training", caption: "Session in progress", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/678199686_1547266127196007_5824923729818111205_n.jpg", alt: "Training", caption: "Working hard", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/679432396_1547266090529344_2174981901323786981_n.jpg", alt: "Training", caption: "Training session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/680215384_1551636973425589_4622423940396380881_n.jpg", alt: "Training", caption: "Boxing practice", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/681179819_1551637006758919_2482000765126214791_n.jpg", alt: "Training", caption: "Fitness session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/681205513_1551636943425592_9078984862359182273_n.jpg", alt: "Training", caption: "Conditioning", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/704016990_1573084391280847_5647354244843059662_n.jpg", alt: "Training", caption: "Working out", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/707591515_1576660957589857_8693349969148306080_n.jpg", alt: "Training", caption: "At the gym", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/78934553_104036454425493_345957528338694144_n.jpg", alt: "Training", caption: "Boxing session", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/79448406_104036524425486_4999593531728199680_n.jpg", alt: "Training", caption: "Training day", category: "Training", aspect: "aspect-[4/3]" },
  { src: "/images/89124655_141412257354579_2198292879183446016_n.jpg", alt: "Training", caption: "Early training", category: "Training", aspect: "aspect-[4/3]" },

  // Coaches
  { src: "/images/vfba-coaching-1.jpg", alt: "Coach instructing", caption: "Coach Tobias guiding a fighter", category: "Coaches", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-coaching-2.jpg", alt: "Coaching session", caption: "Hands-on coaching", category: "Coaches", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-coaching-3.jpg", alt: "Coach at the gym", caption: "Coach Tobias at the gym", category: "Coaches", aspect: "aspect-[4/3]" },
  { src: "/images/tobias-headshot.jpg", alt: "Coach Tobias headshot", caption: "Coach Tobias Mupfuti — Headshot", category: "Coaches", aspect: "aspect-[3/4]" },

  // Boxing / Ring
  { src: "/images/vfba-ring-action-1.jpg", alt: "Ring action", caption: "Inside the ring", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-ring-action-2.jpg", alt: "Ring action", caption: "Sparring session", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-ring-action-3.jpg", alt: "Ring action", caption: "Fight preparation", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-fight-night-1.jpg", alt: "Fight night", caption: "Fight night at VFBA", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-fight-night-2.jpg", alt: "Fight night", caption: "Competitive bout", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-fight-night-3.jpg", alt: "Fight night", caption: "In the corner", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-boxers-real.jpg", alt: "VFBA boxers", caption: "VFBA fighters", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/482242366_1202751151647508_8171452356069273800_n.jpg", alt: "Boxing", caption: "Fight night", category: "Boxing", aspect: "aspect-[4/3]" },
  { src: "/images/490343733_1229498422306114_3049221821198674296_n.jpg", alt: "Boxing", caption: "In the ring", category: "Boxing", aspect: "aspect-[4/3]" },

  // Kids
  { src: "/images/vfba-kids-training-1.jpg", alt: "Kids training", caption: "Youth programme in action", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-kids-training-2.jpg", alt: "Kids training", caption: "Young fighters training", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-kids-training-3.jpg", alt: "Kids training", caption: "Building the next generation", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-children-1.jpg", alt: "Children at VFBA", caption: "VFBA children's programme", category: "Kids", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-children-2.jpg", alt: "Children at VFBA", caption: "VFBA youth programme", category: "Kids", aspect: "aspect-[4/3]" },

  // Community
  { src: "/images/vfba-community-1.jpg", alt: "Community event", caption: "Community outreach", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-2.jpg", alt: "Community event", caption: "VFBA community", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-3.jpg", alt: "Community event", caption: "Community gathering", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-4.jpg", alt: "Community event", caption: "Community outreach", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-5.jpg", alt: "Community event", caption: "Community support", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-event-1.jpg", alt: "Community event", caption: "VFBA community event", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-event-2.jpg", alt: "Community event", caption: "Community celebration", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-community-event-3.jpg", alt: "Community event", caption: "Together we build", category: "Community", aspect: "aspect-[4/3]" },
  { src: "/images/vfba-victoria-falls.jpg", alt: "Victoria Falls", caption: "Victoria Falls, Zimbabwe", category: "Community", aspect: "aspect-[16/9]" },

  // Portraits
  { src: "/images/vfba-boxer-portrait-1.jpg", alt: "VFBA boxer portrait", caption: "VFBA Fighter — Portrait", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-boxer-portrait-2.jpg", alt: "VFBA boxer portrait", caption: "VFBA Fighter — Portrait", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-boxer-portrait-3.jpg", alt: "VFBA boxer portrait", caption: "VFBA Fighter — Portrait", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-1.jpg", alt: "VFBA portrait", caption: "Portrait — VFBA member", category: "Portraits", aspect: "aspect-[3/4]" },
  { src: "/images/vfba-portrait-2.jpg", alt: "VFBA portrait", caption: "Portrait — VFBA member", category: "Portraits", aspect: "aspect-[3/4]" },

  // Tournaments
  { src: "/images/vfba-event-1.jpg", alt: "Tournament event", caption: "Tournament event", category: "Tournaments", aspect: "aspect-[4/3]" },

  // Documentary (Rise)
  { src: "/images/rise-poster.jpg", alt: "Rise poster", caption: "Rise — Official poster", category: "Documentary", aspect: "aspect-[2/3]" },
  { src: "/images/rise-boxing-still.jpg", alt: "Rise boxing still", caption: "Rise — Boxing scene", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-gym-landscape.jpg", alt: "Rise gym landscape", caption: "Rise — Gym landscape", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-intimate-scene.jpg", alt: "Rise intimate scene", caption: "Rise — Intimate moment", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-landscape.jpg", alt: "Rise landscape", caption: "Rise — Landscape shot", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-production-still-1.jpg", alt: "Rise production still", caption: "Rise — Production still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-production-still-2.jpg", alt: "Rise production still", caption: "Rise — Behind the scenes", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-production-still-3.jpg", alt: "Rise production still", caption: "Rise — Production", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-pro-still-1.jpg", alt: "Rise professional still", caption: "Rise — Professional still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-pro-still-2.jpg", alt: "Rise professional still", caption: "Rise — Production still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-pro-still-3.jpg", alt: "Rise professional still", caption: "Rise — Film still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-still-1.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-still-2.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-still-3.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-still-4.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-still-5.jpg", alt: "Rise still", caption: "Rise — Film still", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-tobias-landscape.jpg", alt: "Rise Tobias landscape", caption: "Rise — Coach Tobias", category: "Documentary", aspect: "aspect-[16/9]" },
  { src: "/images/rise-tobias-portrait.jpg", alt: "Rise Tobias portrait", caption: "Rise — Coach Tobias portrait", category: "Documentary", aspect: "aspect-[3/4]" },
  { src: "/images/rise-training-portrait.jpg", alt: "Rise training portrait", caption: "Rise — Training portrait", category: "Documentary", aspect: "aspect-[3/4]" },
  { src: "/images/rise-tribeca-shot.jpg", alt: "Rise Tribeca", caption: "Rise — Tribeca Film Festival", category: "Documentary", aspect: "aspect-[16/9]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  const goToPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToNext, goToPrev]);

  return (
    <>
      <section className="relative page-hero">
        <div className="site-container">
          <AnimatedSection>
            <span className="text-gold/70 text-xs tracking-[0.5em] uppercase block mb-4">
              Visual Archive
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-[0.95] max-w-4xl">
              Gallery
            </h1>
            <p className="mt-6 text-dust text-base md:text-lg max-w-2xl leading-relaxed">
              Authentic images from the gym, training sessions, tournaments,
              community events, and the people who make VFBA what it is.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section border-t border-charcoal-lighter/30">
        <div className="site-container">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 text-xs font-medium tracking-[0.08em] uppercase rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-rust text-cream border border-transparent"
                    : "bg-charcoal-light border border-charcoal-lighter text-dust hover:text-cream hover:border-cream/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="mb-6">
            <span className="text-dust/60 text-sm">{filteredImages.length} photos</span>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredImages.map((image, i) => (
              <AnimatedSection key={image.src + activeCategory} delay={Math.min(i * 0.03, 0.3)}>
                <button
                  onClick={() => openLightbox(i)}
                  className={`group relative break-inside-avoid block w-full ${image.aspect} bg-charcoal-light rounded-sm overflow-hidden border border-charcoal-lighter hover:border-gold/20 transition-all duration-500 cursor-pointer text-left`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-cream text-sm">{image.caption}</span>
                    <span className="text-dust/60 text-xs block mt-1">{image.category}</span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-dust text-lg">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-charcoal-light/50">
        <div className="site-container text-center">
          <ChapterTitle
            number="01"
            title="Video Content"
            subtitle="Training sessions, fight nights, and the Rise documentary — watch on-site."
          />

          <AnimatedSection>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <button
                onClick={() => setActiveVideo("mCbbQSTvef8")}
                className="group relative aspect-video bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/rise-poster.jpg"
                  alt="Rise documentary"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-rust/30 border border-rust/50 flex items-center justify-center mb-3 group-hover:bg-rust/50 transition-colors duration-300">
                    <FiPlay size={22} className="text-cream ml-0.5" />
                  </div>
                  <span className="text-cream text-sm font-display block">Rise Documentary</span>
                  <span className="text-dust text-xs mt-1">Watch on-site</span>
                </div>
              </button>
              <a
                href="/rise-film"
                className="group relative aspect-video bg-charcoal-light rounded-sm border border-charcoal-lighter overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <Image
                  src="/images/rise-pro-still-1.jpg"
                  alt="Rise film"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-cream text-sm font-display block">The Rise Film</span>
                  <span className="text-dust text-xs">Trailers, behind the scenes &amp; interviews</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/98 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
            aria-label="Close lightbox"
          >
            <FiX size={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-dust/60 text-sm z-10">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>

          {/* Category badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <span className="text-gold/70 text-xs tracking-[0.2em] uppercase bg-charcoal/80 px-4 py-2 rounded-sm backdrop-blur-sm">
              {filteredImages[lightboxIndex].category}
            </span>
          </div>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-light/80 backdrop-blur-sm border border-charcoal-lighter flex items-center justify-center text-cream/60 hover:text-cream hover:bg-charcoal-lighter transition-all z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-light/80 backdrop-blur-sm border border-charcoal-lighter flex items-center justify-center text-cream/60 hover:text-cream hover:bg-charcoal-lighter transition-all z-10"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16 my-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center z-10">
            <span className="text-cream text-sm font-display">
              {filteredImages[lightboxIndex].caption}
            </span>
          </div>
        </div>
      )}

      {/* Video Modal — Rise Documentary */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors z-10"
            aria-label="Close video"
          >
            <FiX size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Rise Documentary"
              className="w-full h-full rounded-sm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
