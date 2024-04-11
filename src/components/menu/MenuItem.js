export default function MenuItem(){
    return(
        
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/75 transition-all">
            <div className="text-center ">
            <img src="/fruit.png" className="max-h-48 max-w-auto block mx-auto" alt="pizza"/>
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p>
                Lorem ipsin hkshfdb hehfhi djhsg flsdj auw fnskhfk skf sjj f
            </p>
            <button className="bg-primary mt-4 text-white rounded-full px-8 py-2">Add to Cart $12</button>
    </div>
    );
}