import React from 'react'
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

function Pricing() {
  const navigate = useNavigate()
  const features = [
    '100 AI Interview Credits',
    'Basic Performance Report',
    'Voice Interview Access',
    'Limited History Tracking',
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-6'>
      <div className='max-w-4xl mx-auto mb-14 flex items-start gap-4'>
        <button onClick={() => navigate('/')} className='mt-2 p-3 rounded-full bg-white shadow hover:shadow-md transition' aria-label='Back to home'>
          <FaArrowLeft className='text-gray-600' />
        </button>
        <div className='text-center w-full'>
          <h1 className='text-4xl font-bold text-gray-800'>Free Plan</h1>
          <p className='text-gray-500 mt-3 text-lg'>Paid plans are temporarily unavailable.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-md mx-auto rounded-3xl p-8 border border-emerald-600 shadow-2xl bg-white'
      >
        <h2 className='text-xl font-semibold text-gray-800'>Free</h2>
        <div className='mt-4'>
          <span className='text-3xl font-bold text-emerald-600'>₹0</span>
          <p className='text-gray-500 mt-1'>100 Credits</p>
        </div>
        <p className='text-gray-500 mt-4 text-sm leading-relaxed'>Start preparing for interviews with the free plan.</p>
        <div className='mt-6 space-y-3 text-left'>
          {features.map((feature) => (
            <div key={feature} className='flex items-center gap-3'>
              <FaCheckCircle className='text-emerald-500 text-sm' />
              <span className='text-gray-700 text-sm'>{feature}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/interview')}
          className='w-full mt-8 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:opacity-90 transition'
        >
          Start Practicing
        </button>
      </motion.div>
    </div>
  )
}

export default Pricing
