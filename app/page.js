

export default function Home() {
  return (
    <main className="">
      

  <div class="bg-white p-2 flex justify-between items-center">
			<div class=" px-10 text-sm flex justify-between items-center lg:gap-1">

				<div class="flex border border-black ">

					<div>
						<img class="h-4 px-1 mt-[2px]" src="image/student.png"/>
					</div>

          <button className="px-1"><a href='cvtech'>Promo</a></button>

					{/* <select>
						<option>Alumni</option>
						<option>2018</option>
						<option>2019</option>
						<option>2020</option>
						<option>2021</option>
						<option>2022</option>
						<option>2023</option>
					</select> */}
					
				</div>


				<div class="flex border border-black">

					<div>
						<a href='#'><img class="h-4 px-1 mt-[2px]" src="image/video.png"/></a>
					</div>

					<p className='px-1'>Participer au reunion d'information en ligne</p>
				</div>	

		</div>



			<div class="h-8 w-[250px] hidden md:block md:flex flex justify-between items-center mr-12">	
				<div class="w-[150px] px-3 text-center flex justify-between">
					<button><a href="http://www.facebook.com/Ecole241"><img src="image/facebook.png"/></a></button>
					<button><a href="https://twitter.com/Ecole241_lbv"><img src="image/twitter.png"/></a></button>
					<button><a href="https://www.linkedin.com/company/ecole-241"><img src="image/linkedin-logo.png"/></a></button>
				</div>
				<div class="text-center flex justify-between">
					<a href="htpps:#"><img class="mt-2" src="image/translate.png"/></a>
					<select>
						<option>FR</option>
						<option>EN</option>
						<option>AR</option>
						<option>PR</option>
					</select>
				</div>


			</div>


		</div>



    <div class="bg-black p-3 flex justify-between items-center">


			<div class="h-8 text-center flex justify-between ml-10">
					<img src="image/image 1 (3).png"/>
			</div>


			<div class="h-8 flex justify-between text-center items-center text-sm p-[25px]"> 

				<ul class="flex hidden md:flex flex-col md:flex-row justify-between gap-8">
					<li class="hover:text-red-500 text-white flex justify-between text-center items-center"><h6><button>Accueil</button></h6></li>
					<li class="hover:text-red-500 text-white flex justify-between text-center items-center "><h6><button>Nos Informations</button></h6></li>
					<li class="hover:text-red-500 text-white flex justify-between text-center items-center "><h6><button>Nos campus</button></h6></li>
					<li class="hover:text-red-500 text-white flex justify-between text-center items-center "><h6><button>A propos de nous</button></h6></li>
					<li class="hover:text-red-500 text-white flex justify-between text-center items-center "><h6><button>Blog</button></h6></li>
					<li class="hover:text-red-500 text-white flex justify-between text-center items-center mr-8"><a href='contact'>Contact</a></li>
					
					<li class="flex justify-between content-around items-center h-14 mr-[24px] w-40 text-red-500"><h6 class="p-2 border border-red-500"><button name="button">Postuler sur Libreville</button></h6></li>		
				</ul>
				
					<div class="flex md:hidden">
						<select>
							<option>Menu</option>
							<option>Accueil</option>
							<option>Nos Informations</option>
							<option>Nos campus</option>
							<option>A propos de nous</option>	
							<option>Blog</option>
							<option>Contact</option>
							<option>Postuler sur Libreville</option>
						</select>
					</div>
			</div>

		</div>       




      <div class="flex justify-between items-center">

<div class="h-full items-center">

  <div class="flex justify-between flex-col w-full h-full p-10">
    <div><p class="leading-[50px] font-medium text-5xl">Ecole 241 , Plus qu’une <br></br> formation un <b> métier </b> </p></div><br></br>
    <div><h6 class="text-sm leading-loose">Ecole 241 forme aux métiers du numérique dans tout le Gabon . Rejoignez un réseau <br></br> de plus de 25 000 apprenants et apprenantes. Vous souhaitez vous aussi intégrer un <br></br> parcours de formation Simplon ou être conseillé-e dans votre parcours ? </h6></div><br></br>
    <button class="p-4 rounded text-white bg-red-600 flex-initial w-52  text-sm text-center" name="button">Contactez-nous</button>
  </div> 

</div>


<div class="grid hidden md:grid grid-col md:grid-row grid-cols-2 grid-rows-2 h-full p-4 gap-10 mr-10 ">


  <div class="row-span-2 relative">
                      <img class="h-full absolute w-full left-0 top-0 z-[-1]" src="image/OIP (1).jpeg"/>
                        <div class="h-full bg-[rgba(0,0,0,0.5)] flex flex-col flex justify-end p-4 text-sm text-white underline">
      <a href="https://"><p class="mb-2">Lorem ipsum dolor sit amet. Vel <br></br> quia sint ex fuga quae et </p></a>
      <p><button class="underline hover:text-red-500">Lire</button></p>
    </div>
                    </div>

  
  <div class="relative">
                      <img class="h-full absolute w-full left-0 top-0 z-[-1]" src="image/OIP (2).jpeg"/>
                        <div class="h-full bg-[rgba(0,0,0,0.5)] flex flex-col flex justify-end p-4 text-sm text-white underline">
      <a href="https://"><p class="mt-3">Lorem ipsum dolor sit amet. Vel <br></br> quia sint ex fuga quae et </p></a>
      <p><button class="hover:text-red-500 underline">Lire</button></p>
    </div>
                    </div>


  <div class="relative">
                      <img class="h-full absolute w-full left-0 top-0 z-[-1]" src="image/OIP (2).jpeg"/>
                        <div class="h-full bg-[rgba(0,0,0,0.5)] flex flex-col flex justify-end p-4 text-sm text-white underline">
      <a href="https://"><p class="mt-3">Lorem ipsum dolor sit amet. Vel <br></br> quia sint ex fuga quae et </p></a>
      <p><button class="underline hover:text-red-500">Lire</button></p>
    </div>
                    </div>
  
  <p class="gap-2 underline flex">Nos Articles de blog <button name="button"><img src="image/droite.png"/></button></p>
</div>

</div>





<div class="bg-black py-32 items-center flex justify-between ">


  <div class="ml-10">
    <div><h3 class="mt-[-100px] text-white font-black leading-loose text-5xl">Notre programme</h3></div>
    <div><h6 class="text-sm mt-[-10px] text-white">Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école différente et <br></br> innovante : une approche par projets pour progresser et développer des compétences techniques et humaines<br></br> recherchées sur le marché du travail</h6>
  </div>


  <div class="gap-20 flex justify-between hidden md:block md:flex">

      <div class="h-8 text-white flex justify-between mt-20">
        <div><img src="image/Capa_1 (1) 1.png"/></div>
        <div class="mt-4 text-sm ml-4 font-black"><p>PAS DE COURS.<br></br> PAS DE PROFS.</p></div>
      </div>

      <div class="h-8 text-white flex justify-between mt-20">
        <div><img src="image/Calque_1 1.png"/></div>
        <div class="mt-4 text-sm ml-4 font-black"><p>UNE PÉDAGOGIE PAR <br></br> PROJETS</p></div>
      </div>

      <div class="h-8 text-white flex justify-between mt-20">
        <div><img src="image/Layer_3 1.png"/></div>
        <div class="mt-4 text-sm ml-4 font-black"><p>UN APPRENTISSAGE<br></br> PEER TO PEER</p></div>
      </div>


      <div class="h-8 text-white flex justify-between mt-20">
        <div><img src="image/Calque_1 (1) 1.png"/></div>
        <div class="mt-4 text-sm ml-4 font-black"><p>APPRENDRE EN<br></br> S'AMMUSANT</p></div>
      </div>
  </div>
  
</div>

</div>






<div class="bg-white p-10 flex justify-between items-center">

  <div class="items-center px-4 w-150">

    <div>
      <div><p class="leading-[50px] mt-10 font-black text-5xl">Nos valeurs</p></div><br></br>
      <p class="text-sm ">La position de Ecole 241 est une première et unique au Gabon , elle repose sur des <br></br> valeurs fortes pour une insertion professionnelle durable sur le marché de <br></br> l’emploi.<br></br> Pourquoi Ecole 241 est elle si différente ?</p><br></br>
      <button class="p-3 rounded text-white bg-red-600  flex-initial w-40  text-sm text-center" name="button">Unique au Gabon</button>
    </div>

  </div>






<div class="grid hidden md:grid grid-col md:grid-row grid-cols-2 grid-rows-2 mt-20 gap-20 mr-24 ">


  <div class="relative flex justify-between w-[300px] h-28">
                        
    <img class="h-20 ml-32 " src="image/Capa_1 (2) 1.png"/>
    <div class=" mt-6"><b>GRATUITÉ</b></div>

  </div>


  <div class="relative flex justify-between w-[300px] h-28">
                        
    <img class="h-20 ml-16" src="image/Layer_1 (1) 1.png"/>
    <div class="mt-2 "><b>AUCUN DIPLÔME <br></br> REQUIS</b></div>
                    </div>
  


  
  <div class="relative flex justify-between w-[300px] h-28">
                        <img class="h-20 ml-28" src="./image/Layer_1 1.png"/>
    <div class="mt-2 ml-2"><b>POUR TOUS, <br></br> POUR TOUTES</b></div>
    
                    </div>


  <div class="relative flex justify-between w-[300px] h-28 ml-[60px]">
                        
    <img class="h-20 ml-2" src="image/Calque_1 (2) 1.png"/>
    <div><b>PAS BESOIN DE SAVOIR <br></br> DÉJÀ CODER OU D'AIMER <br></br> LES MATHS</b></div>
                    </div>
  
  
</div>

</div>





<div class="py-20 bg-white items-center">

  <div class="items-center ml-10">

    <div>
      <p class="leading-[60px] font-black text-5xl">Nos cohortes</p>
      <div class="text-sm mb-8">Se former à un métier</div>
    </div>

  </div>

  
  

<div class="flex justify-between items-center ml-10 hidden md:block md:flex">

    <div>
      <div class="bg-gray-200 w-[570px] text-black p-5">
        <div class="flex justify-between ">

          <div class="text-sm">
          <p class="font-black text-2xl">Développeur Web et Web <br></br> Mobile</p><br></br>
          <p>Le développeur web mobile a pour mission de créer et de <br></br> mettre en œuvre des applications mobiles exploitables sur <br></br> smartphone et tablette.</p><br></br>
          <p>Dans le cadre de son travail, il code et élabore des logiciels pour <br></br> traiter les données. Il est aussi chargé de construire des sites<br></br> web, des applications en ligne, des outils interactifs et autres produits accomplis selon les demandes du client</p>
          <button class="p-3 rounded text-white bg-red-600 mt-5 flex-initial w-40  text-sm text-center" name="button">En savoir plus</button>
          </div>


          <div><img class="mr-20" src="image/ic_outline-code-off.png"/></div>

        </div>
      </div>
    </div>
  

    <div>
      <div class="bg-gray-200 w-[570px] mr-[85px] text-black p-5">
        <div class="flex justify-between">
          <div class="text-sm">
          <p class="font-black text-2xl">Référent Digital</p><br></br>
          <p>Le développeur web mobile a pour tâche de concevoir et de créer <br></br> des applications mobiles compatibles avec les smartphones et <br></br> tablettes. Il codifie et programme des programmes afin de gérer les <br></br> données.</p><br></br>
          <p>En outre, il est responsable de construire des sites web, des <br></br> applications en ligne, des outils interactifs et d’autres produits <br></br> achevés selon les besoins spécifiques de la clientèle</p><br></br>
          <button class="p-3 rounded text-white bg-red-600 mt-10 flex-initial w-40  text-sm text-center" name="button">En savoir plus</button>
          </div>


          <div><img class="mr-" src="image/mdi_web-clock.png"/></div>

        </div>

      </div>
    </div>

  </div>


</div>






<div class=" bg-gray-100 items-center p-12">

  <div>
    <div><p class="text-4xl leading-[50px] mt-5 ml-10 font-black text-5xl">Status des promos formations</p></div>
    <div><h6 class="text-sm mt-2 ml-10">Nous vous listons les promotions en cours et celle avenirs</h6></div>
  </div>

  <div class="flex justify-between hidden md:block md:flex gap-4"> 
      <div><h1 class="ml-10 mt-20 bg-white w-[370px] text-sm"><p class="font-black ml-3">Développement web et web mobile</p> <br></br> <p class="ml-3 "><b>Promo 5 2023 - 2024 </b> <br></br> Ville : Libreville PROMO EN COURS</p><div><img class="ml-80" src="image/circle.png"/></div></h1></div>
      <div><h3 class="ml-[5px] mt-20 bg-white w-[370px] text-sm "><p class="font-black ml-3">Développement web et web mobile</p> <br></br> <p class="ml-3"><b>Promo 5 2023 - 2024 </b> <br></br> Ville : MOANDA SECTION EN COURS</p><div><img class="ml-80" src="image/record.png"/></div></h3></div>
       <div><h3 class="mr-[100px] mt-20 bg-white w-[370px] text-sm"><p class="font-black ml-3">Réfèrent Digital</p> <br></br> <p class="ml-3"><b> Promo 5 2023 - 2024 </b> <br></br> Ville : Libreville PROMO EN COURS </p><div><img class="ml-80" src="image/circle.png"/></div></h3></div>
  </div>	

</div>






<div class="bg-white-500 items-center">

  <div>
    <div><p class="text-4xl leading-[50px] mt-10 ml-14 text-5xl font-black">Nous sommes à</p></div>
    <div><h3 class=" mt-3 ml-14">École 241 possède à nos deux campus notamment sur les villes de Libreville et Port-<br></br> Gentil, cette année nous nous déployons du côté de la ville de Moanda.</h3></div>
  </div>
    
  <div class="grid hidden md:grid grid-col md:grid-row grid-cols-2 grid-rows-2 h-[580px] w-[90%] p-10 gap-12 mt-2 ml-4">


    <div class="row-span-2 relative">
                          <img class="h-full absolute w-full left-0 top-0 z-[-1]" src="image/livv.jpeg"/>
                          <div class="w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col flex justify-end p-4 text-sm text-white"><p class="mb-[300px] text-s">120 ETUDIANTS FORMES A CE JOUR</p>
      <p class="mb-2 ml-6"></p><p class="text-4xl font-black">LIBREVILLE</p> <br></br> <p class="mb-4 leading-loose"> qui voluptatibus natus qui repudiandae pariatur et <br></br> quisquam aperiam qui dolorem sequi aut error omnis</p><p></p>
      
    </div>
                    </div>

  
  <div class="relative ">
                      <img class="h-full absolute w-full left-0 top-0 z-[-1]" src="image/por.jpeg"/>
                        <div class="w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col flex justify-end p-4 text-sm text-white"><p class="mb-[10px] text-s">120 ETUDIANTS FORMES A CE JOUR</p>
      <p class="mb-2 ml-6"></p><p class="text-3xl mt-6 font-black">PORT-GENTIL </p><br></br> <p class="mb-4 leading-loose"> qui voluptatibus natus qui repudiandae pariatur et <br></br> quisquam aperiam qui dolorem sequi aut error omnis</p><p></p>
      
    </div>
                    </div>


  <div class="relative">
                      <img class="h-full absolute w-full left-0 top-0 z-[-1]" src="image/porrr.jpeg"/>
                        <div class="w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col flex justify-end p-4 text-sm text-white"><p class="mt-[20px] text-x">120 ETUDIANTS FORMES A CE JOUR</p>
      <p class="mb-2"></p><p class="text-3xl mt-10 font-black">MOANDA</p> <br></br> <p class="mb-4 leading-loose"> qui voluptatibus natus qui repudiandae pariatur et <br></br> quisquam aperiam qui dolorem sequi aut error omnis</p><p></p>
      
    </div>
                    </div>
  

</div>



</div>










<div class=" bg-gray-100 items-center flex justify-between p-6">

  <div class="h-[50px] mt-32 w-[60px] bg-black"></div>

  <div>
  <div><p class="text-4xl leading-[50px] mt-10 ml-2 font-black text-4xl">Témoignage des alumnis</p></div>

      
      <div class="flex hidden md:block md:flex justify-between gap-6 "> 
        <div><h1 class="ml-5 mt-10 bg-white w-[350px] text-sm"><p class="ml-3">Eum veritatis excepturi sed blanditiis 
          <br></br> consequatur quo officia cumque quo 
          <br></br> accusantium voluptate. Qui eligendi 
          <br></br>quaerat et natus voluptatum cum natus 
          <br></br>velit! Ut accusamus galisum aut dolorum 
          <br></br>eaque et ullam odio.

          </p><div class="flex justify-between mt-4 p-4">
          <div><img class="ml-4" src="image/div.png"/></div>
          <div class="mr-10 mt-4"><p><b>Sabile </b> <br></br> Freelancer developpeur web</p></div>
        </div>
        </h1></div>



        <div><h3 class="ml-[5px] mt-10 bg-white w-[350px] text-sm "><p class=" ml-3">Eum veritatis excepturi sed blanditiis 
        <br></br> consequatur quo officia cumque quo 
        <br></br>accusantium voluptate. Qui eligendi 
        <br></br>quaerat et natus voluptatum cum natus 
        <br></br>velit! Ut accusamus galisum aut dolorum 
        <br></br>eaque et ullam odio.


          </p><div class="flex justify-between mt-4 p-4">
          <div><img class="ml-4" src="image/div.png"/></div>
          <div class="mr-8 mt-4"><p><b>Sabile </b> <br></br> Freelancer developpeur web</p></div>
        </div>
        </h3></div>



         <div><h3 class="mr-[130px] mt-10 bg-white w-[350px] text-sm"><p class="ml-3">Eum veritatis excepturi sed blanditiis 
         <br></br> consequatur quo officia cumque quo 
        <br></br>accusantium voluptate. Qui eligendi 
        <br></br>quaerat et natus voluptatum cum natus 
        <br></br>velit! Ut accusamus galisum aut dolorum 
        <br></br>eaque et ullam odio.


          </p><div class="flex justify-between mt-4 p-4">
          <div><img class="ml-4" src="image/div.png"/></div>
          <div class="mr-8 mt-4"><p><b>Sabile </b> <br></br> Freelancer developpeur web</p></div>
        </div>

      </h3></div>
    </div>

  </div>	


</div>











<div class="flex justify-between">	


<div items-center="ml-4 px-6">


      <div><p class="text-4xl ml-32 leading-[50px] mt-28 font-black text-5xl">Les compagnies <br></br>qui nous <br></br> font confiance</p></div><br></br>
      <div><h6 class="text-sm ml-32 ">Vous souhaitez devenir partenaire de l école cliquer <br></br> sur le bouton ci-dessous</h6></div><br></br>
      <button class="p-3 rounded text-white bg-red-600 mt- flex-initial items-center ml-32 w-40  text-sm text-center" name="button">En savoir plus</button>
</div>

    
    
<div class="flex hidden md:block md:flex justify-between gap-20">


    <div>
      <div class="flex justify-between mt-32">
        <img class="h-20 ml-10" src="image/cnamgs.jpeg"/>
      </div>
    
      <div class="flex justify-between">
        <img src="image/labs.jpeg"/>
      </div>
    
      <div class="flex justify-between w-40">
        <img src="image/era.jpeg"/>
      </div>
    </div>

  
    
    <div>
    
      <div class="flex justify-between mr-24 w-50 mt-16">
        <img class="h-38 mr-10" src="image/comi.jpeg"/>
      </div>
    
      <div class="flex justify-between">
        <img src="image/pnpe.jpeg"/>
      </div>

      <div class="flex justify-between">
        <img src="image/sim.jpeg"/>
      </div>

    </div>
    
</div>	

</div>





<div class=" items-center m-20">

  <div class="bg-gray-100 h-[250px] rounded-2xl"> 

  </div>
</div>




<div class="bg-black flex justify-between">
				<div class=" ml-20">
					<div>	
						<img class="h-14 w-60 mt-8" src="image/image 1 (3).png"/>
					</div>

					<div class="h-8 text-center flex">
						<h3 class="text-white ">Plus qu’une formation , un metier</h3>
					</div>
					
				</div>



			<div class="flex hidden md:block md:flex justify-content items-center mt-[-40px] gap-20 mr-20 text-sm">

			
				<div>

					<div class="h-8">
						<h1 class="text-white leading-loose"><button>A propos de nous</button> <br></br><button> Contact </button><br></br><button> Notre impact</button></h1>
					</div>

				</div>

		

				<div>

					<div class="h-8">
						<h3 class="text-white leading-loose"><button>Devenir formateur </button> <br></br><button> Devenir Partenaire</button></h3>
					</div>
				</div>


				<div>
				
					<div class="h-8"> 
						<h3 class="text-white leading-loose"><button>Formation référent Digital</button> <br></br><button> Formation Developpeur web </button></h3>
					</div>

				</div>


				<div>
					<div class="h-8">
						<h3 class="text-white leading-loose"><button>Campus de Libreville</button><br></br><button> campus de Port-Gentil </button><br></br><button> Campus de Moanda</button></h3>
					</div>
				
				</div>

			</div>

		</div>  

	

    </main>
  )
}
