import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
   <>
    
    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16">
      <SectionHeader 
        subHeader={'Our story'}
        mainHeader={'About Us'}
      />
      <div className=" max-w-md mx-auto text-gray-500 flex  mt-4 flex-col gap-4">
      <p >
        Lorem ipsum hhgdso hjkjh njkshkj kkshk fkhdkfkj kjkhkh kjkhkh
        hkhjlkj jljljk kjhif jjhskfjl khfjf kjhsjljf ljlf lsjfkjsflsjo kur w kjkhkh
        jkisuo uolluj hssfsl kujeel jhklrj ljlu rjlhh Lorem ipsum hhgdso hjkjh njkshkj kkshk fkhdkfkj kjkhkh kjkhkh
        hkhjlkj jljljk kjhif jjhskfjl khfjf kjhsjljf ljlf lsjfkjsflsjo kur w kjkhkh
        jkisuo uolluj hssfsl kujeel jhklrj ljlu rjlhh
      </p>
      <p>
      Lorem ipsum hhgdso hjkjh njkshkj kkshk fkhdkfkj kjkhkh kjkhkh
        hkhjlkj jljljk kjhif jjhskfjl khfjf kjhsjljf ljlf lsjfkjsflsjo kur w kjkhkh
        jkisuo uolluj hssfsl kujeel jhklrj ljlu rjlhh Lorem ipsum hhgdso hjkjh njkshkj kkshk fkhdkfkj kjkhkh kjkhkh
        hkhjlkj jljljk kjhif jjhskfjl khfjf kjhsjljf ljlf lsjfkjsflsjo kur w kjkhkh
        jkisuo uolluj hssfsl kujeel jhklrj ljlu rjlhh
      </p>
      <p>
      Lorem ipsum hhgdso hjkjh njkshkj kkshk fkhdkfkj kjkhkh kjkhkh
        hkhjlkj jljljk kjhif jjhskfjl khfjf kjhsjljf ljlf lsjfkjsflsjo kur w kjkhkh
        jkisuo uolluj hssfsl kujeel jhklrj ljlu rjlhh Lorem ipsum hhgdso hjkjh njkshkj kkshk fkhdkfkj kjkhkh kjkhkh
        hkhjlkj jljljk kjhif jjhskfjl khfjf kjhsjljf ljlf lsjfkjsflsjo kur w kjkhkh
        jkisuo uolluj hssfsl kujeel jhklrj ljlu rjlhh
      </p>
      </div>
      
    </section>
    <section className="text-center my-8">
      <SectionHeader
       subHeader={'FindUs here'} 
       mainHeader={'Contact Us'}
       />
       <div className="mt-8">
       <a className=" text-4xl underline text-gray" href="tel:+916303660509">+916303660509</a>
       </div>
       
    </section>
   </>
  );
}
