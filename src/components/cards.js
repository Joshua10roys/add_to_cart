import { useState } from "react"
import { ImStarFull } from 'react-icons/im';

export default function Cards({ name, price, count, setCount }) {

    const [show, setShow] = useState(true);

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{name}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <ImStarFull />
                            <ImStarFull />
                            <ImStarFull />
                            <ImStarFull />
                            <ImStarFull />
                        </div>
                        <p>{price}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        {show
                            ?
                            <button className="btn btn-primary mt-auto" onClick={() => {
                                setShow(!show)
                                setCount(count + 1)
                            }} >
                                Add to Cart
                            </button>
                            :
                            <button className="btn btn-danger mt-auto" onClick={() => {
                                setShow(!show)
                                setCount(count - 1)
                            }}>
                                Remove
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}