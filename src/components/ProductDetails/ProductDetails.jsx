import React ,{ useState,} from 'react' 
import AOS from "aos";
import "aos/dist/aos.css";
import { RadioGroup } from '@headlessui/react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';



const product = {
  name: 'Nike Air Zoom Elite 9000',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Sports', href: '#' },
  ],
  images: [
    {
      src: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70&crop=true',  
      alt: 'Side View.',  
    },
    {
      src: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/1/2/8-white-leaf-8-urbanbox-white-black-original-imagvgf4g9srhbxj.jpeg?q=70&crop=true',
      alt: 'Front View',
    },
    {
      src: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/9/h/q/8-white-leaf-8-urbanbox-white-black-original-imagvgf4k8sfb2rm.jpeg?q=70&crop=true',
      alt: 'Back View',
    },
    {
      src: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/9/h/q/8-white-leaf-8-urbanbox-white-black-original-imagvgf4k8sfb2rm.jpeg?q=70&crop=true'  ,
      alt: 'Plane View',
    },
    
  ],
  colors: [
    { name: 'Thunder Blue', class: 'bg-blue-200', selectedClass: 'ring-gray-400' },
    { name: "Volt Green", class: 'bg-green-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: '39', inStock: false },
    { name: '40', inStock: true },
    { name: '41', inStock: true },
    { name: '42', inStock: true },
    { name: '43', inStock: true },
    { name: '44', inStock: true },
    { name: '45', inStock: true },
  ],
  description:
  "Experience the epitome of performance and style with the Nike Air Zoom Elite 9000. Meticulously crafted for the dedicated male runner, these running shoes embody a perfect fusion of cutting-edge technology, comfort, and striking aesthetics.",
    highlights: [
    'Responsive Air Zoom Technology',
    'Flyknit Precision Fit',
    'Dynamic Color Palette',
    'Lightweight and Supportive Design',
  ],
  details:"Flywire Technology for Lockdown Fit: Enjoy a secure and adaptive fit with Flywire technology. These strategically placed cables wrap around your foot, delivering a lockdown feel for enhanced stability during your runs."
}
// const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>
      <Navbar />
<div className="bg-white dark:bg-black dark:text-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900 dark:text-white">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
{/* Image Crousel  */}
        <div className='m-auto w-3/6 overflow-hidden bg-grey bg-slate-300 w-100 dark:text-white'>
          <Carousel showArrows={true} >
                <div > 
                    <img src={product.images[0].src} className=""/>
                    <p className="legend">{product.images[0].alt}</p> 
                </div>
                <div>
                    <img src={product.images[1].src} />
                    <p className="legend">{product.images[1].alt}</p>
                </div>
                <div>
                    <img src={product.images[2].src} />
                    <p className="legend">{product.images[2].alt}</p>
                </div>
                <div>
                    <img src={product.images[3].src} />
                    <p className="legend">{product.images[3].alt}</p>
                </div>
            </Carousel> 
            </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium dark:text-white text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium dark:text-white text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white dark:text-black text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 dark:text-black text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase dark:text-white hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 dark:text-white text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <Link to="/cart" >
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
              </Link>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base dark:text-white text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium dark:text-white text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400 dark:text-white">
                      <span className="text-gray-600 dark:text-white">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium dark:text-white text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm dark:text-white text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Footer />
    </div>
    </>
    
  )
}
