import { GetCategories } from "@/GraphQL/queries";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navmenu() {
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newCategories = await GetCategories();
        setCategories(newCategories);
      } catch (error) {
        console.error("Error fetching hehehe:", error);
      }
    };

    fetchData();

    const handleScroll = () => {
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / pageHeight) * 100;
  
      if (scrollPercentage >= 0.1) {
        // Close the menu when scrolled 50% or more
        handleCategoryMouseLeave()
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle category hover
  const handleCategoryHover = (index) => {
    clearTimeout(hideTimeout); // Clear any existing timeout
    setHoveredCategory(index);
  };

  // Function to handle category mouse leave
  const handleCategoryMouseLeave = () => {
    // Set a timeout to hide subcategories after 100ms
    const timeout = setTimeout(() => {
      setHoveredCategory(null);
    }, 150);
    setHideTimeout(timeout);
  };
  

  return (
    <div className="container mx-auto  justify-center space-x-4 hidden sm:hidden lg:flex md:hidden ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative  "
            onMouseEnter={() => handleCategoryHover(index)}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <div  className="">
              <Link
                href={`/${category.attributes.CategorySlug}`}
                onClick={handleCategoryMouseLeave}
                className="text-center text-base font-medium hover:text-blue-500"
              >
                {category.attributes.Title}
              </Link>
            </div>
            <div className="relative" >
              {index === hoveredCategory && (
                <div className="fixed z-50  inline-flex  top-1/2 w-3/4 h-2/3 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md py-8 px-8 justify-center  ">
                  <div className="  w-1/3 overflow-y-auto overscroll-none  bg-white  ">
                    {category.attributes.sub_categories ? (
                      <ul className=" space-y-1 py-2  ml-6">
                        {category.attributes.sub_categories.data.map((sub, subIndex) => (
                          <li key={subIndex} className="">
                            <Link
                              href={`/[CategorySlug]/[sSlug]`}
                              as={`/${category.attributes.CategorySlug}/${sub.attributes.sSlug}`}
                              onClick={handleCategoryMouseLeave}
                              className="text-charcoal-gray text-s  hover:underline underline-offset-8 decoration-black "
                            >

                              {sub.attributes.Title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No sub-categories available</p>
                    )}
                  </div>
                  <div className=" bg-blue-500 grid  content-start w-2/3">
                    {
                      category.attributes.articles.data.map((article)=>(
                        <Link  href={`/Article/${article.attributes.slug}`}>
                          <div className="inline-flex space-x-10  place-items-center px-2 py-2 ">
                            {article.attributes.Media.data.map((media) => (
                              <Image
                              src={`${media.attributes.url}`}
                              width={200}
                              height={200}
                              alt="Picture of the author"
                              className=""
                            />
                            ))}
                            <h1 className="">{article.attributes.Title}</h1>
                            
                          </div>
                        </Link>
                        
                      )).slice(0, 2)
                    }
                  </div>
                </div>
              )}
            </div>
        </div>
      ))}

    </div>
  );
}
