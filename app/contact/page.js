export default function contact() {
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
						<op>Alumni</op>
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
					<select className="">
						<option>FR</option>
						<option>EN</option>
						<option>AR</option>
						<option>PR</option>
					</select>
				</div>


			</div>


		</div>



    <div class=" bg-black p-3 flex justify-between items-center">


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


      
      <div className=" isolate bg-white px-6 py-18 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
        
      </div>




      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className=" text-red-500 block text-sm font-semibold leading-6 text-gray-900">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
       
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 flex justify-center gap-4">
            <div>
            <label htmlFor="phone-number" className="text-red-500 py-4 block text-sm font-semibold leading-6 text-gray-900">
              Numéro de téléphone
            </label>
            </div>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Pays
                </label>
                {/* <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                  <option>GA</option>
                  <option>DR</option>
                  <option>BR</option>
                </select> */}
               
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full px-4 rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="formbold-input-group">
          <label class="formbold-form-label text-sm font-semibold">
          Quelle option vous décrit le mieux?
          </label>
  
          <select class="formbold-form-select" name="occupation" id="occupation">
            <option value="Student">Student</option>
            <option value="designer">UX/UI Designer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="frontend">Front End Developer</option>
          </select>
        </div>
  
        <div class="formbold-input-radio-wrapper">
          <label for="ans" class="formbold-form-label text-sm font-semibold">
          Recommanderiez-vous notre site à un ami?
          </label>
  
          <div class="formbold-radio-flex">
            <div class="formbold-radio-group">
              <label class="formbold-radio-label">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="ans"
                  id="ans"
                />
                oui
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="ans"
                  id="ans"
                />
                Non
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="ans"
                  id="ans"
                />
                Peut-être
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
          </div>
        </div>
  
        <div class="formbold-input-radio-wrapper ">
          <label class="formbold-form-label text-red-500 text-sm font-semibold">
          Quelles langues et freameworks connaissez-vous ?

          </label>
  
          <div class="flex justify-center ml-80 mt-4 gap-4 formbold-radio-flex ">
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="c">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="c"
                  id="c"
                />
                C
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="c++">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="c++"
                  id="c++"
                />
                c++
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="java">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="java"
                  id="java"
                />
                Java
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="python">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="python"
                  id="python"
                />
                Python
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="javaScript">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="javaScript"
                  id="javaScript"
                />
                JavaScript
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="react">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="react"
                  id="react"
                />
                React
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="angular">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="angular"
                  id="angular"
                />
                Angular
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="django">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="django"
                  id="django"
                />
                Django
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="tailwind">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="tailwind"
                  id="tailwind"
                />
                Tailwind CSS
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
  
            <div class="formbold-radio-group">
              <label class="formbold-radio-label" for="bootstrap">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="bootstrap"
                  id="bootstrap"
                />
                Bootstrap
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
          </div>
        </div>


          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          
        </div>
        
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="block w-200 rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Envoyez
          </button>
        </div>
      </form>







      
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