import React from 'react';


const Fall = () => {
  return (
    <div>
      <div class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Fall Arrangements</h1>
            <p class="lead fw-normal text-white-50 mb-0">Fill your home with fall colors!</p>
          </div>
        </div>
      </div>

    <div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1558879787-4c4aea1fbb83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1566179173977-d0e1842e6533?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1585538021714-6e27e9fa1165?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1610827255424-0ed21ae4f50f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzg2fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VuZmxvd2VyJTIwYm91cXVldHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1613999843658-b69b1926ba95?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYyfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1619280783292-1fb003af031b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="card-img-top" src="https://images.unsplash.com/photo-1504383017-d93917065002?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhbGwlMjBmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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

export default Fall;