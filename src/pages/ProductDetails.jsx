import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageSlider from "../components/ImageSlider";
import { Select, Button, Form } from "antd";
import Ratings from "../components/Ratings";
import { addToCart } from "../redux/actions/cartAction";

const ProductDetails = (props) => {
  let id = props.match.params.id;
  const [form] = Form.useForm();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.products);

  let product = items.filter((item) => item._id === id);
  product = product[0];

  const onChangeHandler = (values) => {
    setQuantity(values);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(product._id, quantity));
  };

  return (
    <div className="details">
      {
        <>
          <ImageSlider key={product._id} images={product.image} />

          <div className="details-description">
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <p>Brand: {product.brand}</p>
            <p>Description: {product.description}</p>
            <Ratings value={product.rating} />
            <p className="description-quantity">Quantity: </p>
            {product.countIntStock !== 0 && (
              <>
                <Form
                  form={form}
                  name="dynamic_form_nest_item"
                  autoComplete="off"
                >
                  <Form.Item className="details-select">
                    <Select defaultValue={1} onChange={onChangeHandler}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <Select.Option value={x + 1}>{x + 1}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Form>
              </>
            )}
            <Button type="primary" onClick={onClickHandler}>
              Add to Cart
            </Button>
          </div>
        </>
      }
    </div>
  );
};

export default ProductDetails;
