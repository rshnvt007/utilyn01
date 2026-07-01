import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Collections from './pages/Collections'
import BundleDetail from './pages/BundleDetail'
import Cart from './pages/Cart'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/bundle" element={<BundleDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
