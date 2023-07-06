import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdb-react-ui-kit'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function ProductCard() {
  const items = useSelector((state) => state.allCart.items)

  const dispatch = useDispatch()

  return (
    <div className='m-2'>
      <MDBContainer>
        <MDBRow className='mb-3'>
          {items.map((item) => (
            <MDBCol key={item.id} size='md'>
              <MDBCard>
                <MDBCardImage src={item.img} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
