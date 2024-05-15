import React, { useState } from 'react'

export default function Hw8() {
    const [selectedCity, setSelectedCity] = useState('')
    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value)
    }
  return (
    <div>
        <h2>Hw8</h2>
        <select name="" id="" value={selectedCity} onChange={handleSelectChange}>
            <option value="">Chọn thành phố</option>
            <option value="Hanoi">Hà Nội</option>
            <option value="HoChiMinh">Hồ Chí Minh</option>
            <option value="Danang">Đà Nẵng</option>
            <option value="Hue">Huế</option>
            <option value="HaiPhong">Hải Phòng</option>
        </select>
        {selectedCity && <p>Bạn đã chọn: {selectedCity}</p>}
    </div>
  )
}
