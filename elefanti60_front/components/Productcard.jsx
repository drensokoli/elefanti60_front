const Productcard = ({title, price, category, description, image, id})=> {
    return  <div className="post" id={id}>
                <p>{title}</p>
                <p className="">{pri}</p>
                <p className="">{cat}</p>
                <p className="">{desc}</p>
                <a className="">{imzh}</a>
        </div>
    
}

export default Productcard;
