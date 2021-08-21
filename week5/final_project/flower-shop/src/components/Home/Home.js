import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      <div class="title-container">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Best in Bloom</h1>
            <p class="lead fw-normal text-white-50 mb-0">Flowers & Gifts</p>
          </div>
        </div>
      </div>

    <div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1612438115954-ae5a72df09eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Fancy Product</h5>
                            {/* Product price */}
                            $40.00 - $80.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">View options</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}} >Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1599031426429-c3ae483f37fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Special Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right:'0.5rem'}}>Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1582912220044-23b74ca4b20f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwYXJyYW5nZW1lbnRzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Sale Item</h5>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$50.00</span>
                            $25.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1613508636209-cd13d894e15b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Popular Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            $40.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right:'0.5rem'}}>Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1618667066353-06982fc2ea72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Sale Item</h5>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$50.00</span>
                            $25.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1494336956603-39a3641efa1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Fancy Product</h5>
                            {/* Product price */}
                            $120.00 - $280.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">View options</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right:'0.5rem'}}>Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Special Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1617044243927-6d36b5694372?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEyfHxmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Popular Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            $40.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default Home;