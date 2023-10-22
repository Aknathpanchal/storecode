import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';
import Home from './components/Home';

const App = () => {
  return (
    <div className=' relative bg-slate-300'>
      <Header />
      
      <Home />
      <div>
        <img src="https://storecode.in/images/influence-bg.jpg" className='w-full h-full bg-cover' alt="influence-bg" />
      </div>

      <div className="bg-slate-100 m-20 rounded-3xl px-[10%] py-10 flex flex-col gap-[20%]">
        <h1
          className="text-9xl sm:text-6xl font-bold text-center text-black pb-20"
          style={{
            display: "block",
            fontFamily: "poppins-bold",
            color: "#333333",
            lineHeight: "1.2",
          }}
        >
          
          Storecode for Influencers
          
        </h1>
        <div className="text-center flex flex-col gap-10">
            

            <h3 className="text-center font-normal text-5xl text-black"> 💰 Earn from every purchase made through your unique codes</h3><br/>
            <h3 className="text-center font-normal text-5xl text-black">🛍 A personal store on our platform powered by your influence </h3><br/>
            <h3 className="text-center font-normal text-5xl text-black">🤫 Keep your recommended sites a secret under your unique code </h3><br/>

            
            

           
            
          </div>
      
      </div>

      <div className="bg-slate-100 m-20 rounded-3xl px-[10%] py-10 flex flex-col gap-[20%]">
    
      <div className="wrap-section100 p-l-45 p-r-45 p-t-65 p-b-54">
      <h1
          className="text-8xl text-center font-bold sm:text-5xl text-black pb-20"
          style={{
            display: "block",
            fontFamily: "poppins-bold",
            color: "#333333",
            lineHeight: "1.2",
          }}
        >🤝Exclusive Partnership Program🌟
          
        </h1>
       
              <div className="text-left flex flex-col gap-10 ">
                <h6 className="text-center font-bold text-3xl text-black">Storecode is gearing up to collaborate with major shopping brands. As an Influencer on our platform, you gain a fantastic advantage – <strong> your very own personal store on our website</strong>. This store is powered by your influence and recommendations. 🛒💃🕺</h6><br/>
                <h6 className="text-center font-bold text-3xl text-black">Here's the twist: We encourage you not to reveal the exact websites from which you purchase the products you promote in your new videos henceforth. Instead, keep it a secret 🤫🤭 under the code you share. Why? Because disclosing sites directly can create unnecessary competition and, in many cases, lead to users buying directly from those mentioned sites, bypassing all your hard work. 🙈💼 </h6><br/>
                <h6 className="text-center font-bold text-3xl text-black">By sharing your unique code, your followers are directed to the product on your recommended site. As we embark on our collaboration with major brands, your influencer status will transform into a powerful partnership program, offering you the opportunity to earn from every purchase made through your unique codes. Your influence becomes your earning potential. 💰💡 </h6><br/>
                <h6 className="text-center font-bold text-3xl text-black">This approach ensures that your hard work as an influencer is rewarded, and it aligns perfectly with our mission to create a win-win ecosystem for influencers and their followers. Get ready to make the most of this exclusive partnership program with Storecode! ✨ </h6><br/>
              </div>
        </div>
      </div>



      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
