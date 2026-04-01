'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function PendingReports() {
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPendingReports()
  }, [])

  const fetchPendingReports = async () => {
    try {
      const { data, error } = await supabase
        .from('incident_reports')
        .select('*')
        .eq('status', 'submitted')
        .order('created_at', { ascending: false })

      if (error) throw error
      setReports(data || [])
    } catch (error) {
      console.error('Error fetching reports:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (reportId: string) => {
    try {
      const { error } = await supabase
        .from('incident_reports')
        .update({ status: 'approved' })
        .eq('id', reportId)

      if (error) throw error
      setReports(reports.filter(r => r.id !== reportId))
      alert('Report approved!')
    } catch (error) {
      console.error('Error approving report:', error)
      alert('Failed to approve report')
    }
  }

  const handleReject = async (reportId: string) => {
    try {
      const { error } = await supabase
        .from('incident_reports')
        .update({ status: 'rejected' })
        .eq('id', reportId)

      if (error) throw error
      setReports(reports.filter(r => r.id !== reportId))
      alert('Report rejected!')
    } catch (error) {
      console.error('Error rejecting report:', error)
      alert('Failed to reject report')
    }
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="min-h-screen bg-amber-100 p-8" style={{ fontFamily: 'Courier New, monospace' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">PENDING INCIDENT REPORTS</h1>

        {reports.length === 0 ? (
          <p className="text-gray-700">No pending reports.</p>
        ) : (
          <div className="space-y-6">
            {reports.map((report) => (
              <div key={report.id} className="bg-white border-2 border-black p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">WITNESS</p>
                    <p className="font-bold text-black">{report.witness_name}</p>
                    <p className="text-sm text-gray-600">{report.witness_email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">INCIDENT DATE</p>
                    <p className="font-bold text-black">{new Date(report.incident_date).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">LOCATION</p>
                    <p className="font-bold text-black">Floor {report.floor}, {report.wing} - {report.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SUBJECT COUNT</p>
                    <p className="font-bold text-black">{report.cat_count}</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-red-800 p-3 mb-4">
                  <p className="text-sm text-gray-600">DESCRIPTION</p>
                  <p className="text-black">{report.subject_description}</p>
                </div>

                {report.photo_url && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">EVIDENCE PHOTO</p>
                    <img src={report.photo_url} alt="Evidence" className="max-h-48 border-2 border-black" />
                  </div>
                )}

                {report.additional_notes && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">NOTES</p>
                    <p className="text-black">{report.additional_notes}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => handleApprove(report.id)}
                    className="bg-green-700 text-white px-6 py-2 border-2 border-black font-bold hover:bg-green-800"
                  >
                    APPROVE
                  </button>
                  <button
                    onClick={() => handleReject(report.id)}
                    className="bg-red-700 text-white px-6 py-2 border-2 border-black font-bold hover:bg-red-800"
                  >
                    REJECT
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
