import React, { Component, useEffect, useState } from 'react'
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth'



const Table = (props) => {

    const [data, setData] = useState([{
        file_name: '',
        project_id: '',
        user_id: '',
        doc_url: ''
    }])
    console.log(data)

    useEffect(() => {
        const getData = () => {
            axiosWithAuth()
                .get('/doc/url')
                .then(response => {
                    console.log(response)
                    let docs = response.data
                    console.log(docs)
                    setData(...docs)
                    console.log(data)
                })

            return data.map((d, index) => {
                const { file_name, project_id, user_id, doc_url } = d
                return (
                    <tr key={project_id}>
                        <td>{file_name}</td>
                        <td>{project_id}</td>
                        <td>{user_id}</td>
                        <td>{doc_url}</td>
                    </tr>
                )
            })
        }
    }, [data])


    return (
        <div>
            <h1>Documents</h1>
            <table id='data'>
                <tbody>
                    {data.map((d, index) => {
                        return (<tr key={d.project_id}><td>{d.project_id}</td>
                            <td>{d.file_name}</td><td>{d.doc_url}</td><td>{d.user_id}</td></tr>)
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Table
