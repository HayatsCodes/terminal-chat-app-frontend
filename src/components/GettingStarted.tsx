const GettingStarted = () => {
  return (
    <div id="usage">
      <div className="text-xl text-[#CBFC01] font-semibold mb-4">
        Getting Started
      </div>
      <ol className="text-white text-lg flex flex-col gap-4 mb-4">
        <li>
          1. Start the chat application: <span className="text-[#CBFC01] text-center">`tarminal-chat-app start`</span>
        </li>
        <li>
          2. Follow the on-screen authentication options to <span className="text-[#CBFC01]">login or register a new account</span>
        </li>
        <li>
          3. Navigate through the home options to <span className="text-[#CBFC01]">create or join a public chat room</span>
        </li>
        <li>4. Start chatting with other users in <span className="text-[#CBFC01]">real-time!</span> </li>
      </ol>
    </div>
  )
}

export default GettingStarted
