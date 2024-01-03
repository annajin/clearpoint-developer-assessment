// Simulate Axios behavior for testing purposes
const axios = {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: '71249ab3-783e-4b42-a042-82ddfce6f56c',
          description: '123',
          isCompleted: false,
        },
        {
          id: '1795c086-967d-43de-8e05-4c5c08be5da9',
          description: 'grocery',
          isCompleted: false,
        },
        {
          id: '442052e4-b76d-4859-a4da-a5fa987fc9ab',
          description: 'gym',
          isCompleted: false,
        },
      ],
    })
  ),
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        id: '8a729925-dbb6-41f7-8f32-65489713980a',
        description: 'test',
        isCompleted: false,
      },
    })
  ),

  put: jest.fn(),
}

export default axios
