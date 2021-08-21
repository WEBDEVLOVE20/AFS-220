import React from 'react';


const Spring = () => {
  return (
    <div>
      <div class="title-container-spring">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Spring Arrangements</h1>
            <p class="lead fw-normal text-white-50 mb-0">Bring in that spring smell with our spring arangements.</p>
          </div>
        </div>
      </div>

    <div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1487530903081-59e0e3331512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnRzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1580316008590-43d5fb8cc3cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHNwcmluZyUyMGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1617630970636-922f0a7cb0f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNwcmluZyUyMGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1550237390-96532abac3ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHNwcmluZyUyMGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1616917211409-a1463ef90c93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHNwcmluZyUyMGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1587235442314-afb44886c549?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxzcHJpbmclMjBmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1552855320-5763bd52c279?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHxzcHJpbmclMjBmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="card-img-top" src="https://images.unsplash.com/photo-1523213154665-19efef0d633c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxzcHJpbmclMjBmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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

export default Spring;