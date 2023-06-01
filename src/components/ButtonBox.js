import React from 'react';
import Button from './Button';
import './ButtonBox.css';

const ButtonBox = () => (
  <div className="buttonBox">
    <Button value="AC" />
    <Button value="+/-" />
    <Button value="%" />
    <Button className="bg-orange" value="÷" />
    <Button value="7" />
    <Button value="8" />
    <Button value="9" />
    <Button className="bg-orange" value="x" />
    <Button value="4" />
    <Button value="5" />
    <Button value="6" />
    <Button className="bg-orange" value="-" />
    <Button value="1" />
    <Button value="2" />
    <Button value="3" />
    <Button className="bg-orange" value="+" />
    <Button className="zero" value="0" />
    <Button value="." />
    <Button className="bg-orange" value="=" />
  </div>
);

export default ButtonBox;
